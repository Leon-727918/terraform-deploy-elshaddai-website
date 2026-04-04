#!/bin/bash

# Script to create AWS Lambda function from container image

set -e

# Configuration
REGION="us-east-1"
FUNCTION_NAME="elshaddai-cloud-solutions-website"
REPO_NAME="elshaddai-cloud-solutions"
IMAGE_TAG="latest"
MEMORY_SIZE=1024
TIMEOUT=30

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo "======================================"
echo "Creating AWS Lambda Function"
echo "======================================"

# Get AWS Account ID
echo -e "\n${YELLOW}[1/4] Getting AWS Account ID...${NC}"
ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
IMAGE_URI="${ACCOUNT_ID}.dkr.ecr.${REGION}.amazonaws.com/${REPO_NAME}:${IMAGE_TAG}"
echo -e "${GREEN}✓ Account ID: ${ACCOUNT_ID}${NC}"
echo -e "${GREEN}✓ Image URI: ${IMAGE_URI}${NC}"

# Create IAM role for Lambda (if not exists)
echo -e "\n${YELLOW}[2/4] Creating IAM role for Lambda...${NC}"
ROLE_NAME="${FUNCTION_NAME}-role"

# Check if role exists
if aws iam get-role --role-name ${ROLE_NAME} > /dev/null 2>&1; then
    echo -e "${GREEN}✓ Role already exists: ${ROLE_NAME}${NC}"
else
    # Create trust policy
    cat > /tmp/trust-policy.json << EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
EOF

    # Create role
    aws iam create-role \
        --role-name ${ROLE_NAME} \
        --assume-role-policy-document file:///tmp/trust-policy.json

    # Attach basic execution policy
    aws iam attach-role-policy \
        --role-name ${ROLE_NAME} \
        --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole

    echo -e "${GREEN}✓ Role created: ${ROLE_NAME}${NC}"
    echo "Waiting 10 seconds for IAM role to propagate..."
    sleep 10
fi

ROLE_ARN=$(aws iam get-role --role-name ${ROLE_NAME} --query 'Role.Arn' --output text)

# Create or update Lambda function
echo -e "\n${YELLOW}[3/4] Creating/Updating Lambda function...${NC}"

if aws lambda get-function --function-name ${FUNCTION_NAME} --region ${REGION} > /dev/null 2>&1; then
    # Update existing function
    echo "Function exists. Updating..."
    aws lambda update-function-code \
        --function-name ${FUNCTION_NAME} \
        --image-uri ${IMAGE_URI} \
        --region ${REGION}
    
    echo -e "${GREEN}✓ Lambda function updated${NC}"
else
    # Create new function
    echo "Creating new function..."
    aws lambda create-function \
        --function-name ${FUNCTION_NAME} \
        --package-type Image \
        --code ImageUri=${IMAGE_URI} \
        --role ${ROLE_ARN} \
        --timeout ${TIMEOUT} \
        --memory-size ${MEMORY_SIZE} \
        --region ${REGION}
    
    echo -e "${GREEN}✓ Lambda function created${NC}"
fi

# Create Function URL
echo -e "\n${YELLOW}[4/4] Creating Function URL...${NC}"

if aws lambda get-function-url-config --function-name ${FUNCTION_NAME} --region ${REGION} > /dev/null 2>&1; then
    echo "Function URL already exists"
    FUNCTION_URL=$(aws lambda get-function-url-config --function-name ${FUNCTION_NAME} --region ${REGION} --query 'FunctionUrl' --output text)
else
    # Create function URL
    FUNCTION_URL=$(aws lambda create-function-url-config \
        --function-name ${FUNCTION_NAME} \
        --auth-type NONE \
        --region ${REGION} \
        --query 'FunctionUrl' --output text)
    
    # Add permission for public access
    aws lambda add-permission \
        --function-name ${FUNCTION_NAME} \
        --statement-id FunctionURLAllowPublicAccess \
        --action lambda:InvokeFunctionUrl \
        --principal "*" \
        --function-url-auth-type NONE \
        --region ${REGION} > /dev/null 2>&1 || true
fi

echo -e "\n${GREEN}======================================${NC}"
echo -e "${GREEN}Deployment completed successfully!${NC}"
echo -e "${GREEN}======================================${NC}"
echo ""
echo -e "${YELLOW}Function Name:${NC} ${FUNCTION_NAME}"
echo -e "${YELLOW}Region:${NC} ${REGION}"
echo -e "${YELLOW}Function URL:${NC} ${FUNCTION_URL}"
echo ""
echo -e "${GREEN}Your app is now live!${NC}"
echo "Visit the URL above to access your application."
echo ""
echo "To update the app:"
echo "1. Make your changes"
echo "2. Run ./deployment-scripts/build.sh"
echo "3. Run ./deployment-scripts/push-to-ecr.sh"
echo "4. Run ./deployment-scripts/create-lambda.sh"
