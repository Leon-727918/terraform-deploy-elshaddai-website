#!/bin/bash

# Script to push Docker image to AWS ECR

set -e

# Configuration
REGION="us-east-1"
REPO_NAME="elshaddai-cloud-solutions"
IMAGE_NAME="elshaddai-cloud-solutions"
IMAGE_TAG="latest"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo "======================================"
echo "Pushing to AWS ECR"
echo "======================================"

# Check if AWS CLI is configured
if ! aws sts get-caller-identity > /dev/null 2>&1; then
    echo -e "${RED}Error: AWS CLI not configured. Please run 'aws configure' first.${NC}"
    exit 1
fi

# Get AWS Account ID
echo -e "\n${YELLOW}[1/5] Getting AWS Account ID...${NC}"
ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
echo -e "${GREEN}✓ Account ID: ${ACCOUNT_ID}${NC}"

# Create ECR repository if it doesn't exist
echo -e "\n${YELLOW}[2/5] Creating ECR repository (if not exists)...${NC}"
aws ecr describe-repositories --repository-names ${REPO_NAME} --region ${REGION} > /dev/null 2>&1 || \
aws ecr create-repository \
    --repository-name ${REPO_NAME} \
    --region ${REGION} \
    --image-scanning-configuration scanOnPush=true

echo -e "${GREEN}✓ ECR repository ready${NC}"

# Login to ECR
echo -e "\n${YELLOW}[3/5] Logging in to ECR...${NC}"
aws ecr get-login-password --region ${REGION} | \
docker login --username AWS --password-stdin ${ACCOUNT_ID}.dkr.ecr.${REGION}.amazonaws.com

echo -e "${GREEN}✓ Logged in to ECR${NC}"

# Tag image
echo -e "\n${YELLOW}[4/5] Tagging image...${NC}"
ECR_URI="${ACCOUNT_ID}.dkr.ecr.${REGION}.amazonaws.com/${REPO_NAME}:${IMAGE_TAG}"
docker tag ${IMAGE_NAME}:${IMAGE_TAG} ${ECR_URI}

echo -e "${GREEN}✓ Image tagged: ${ECR_URI}${NC}"

# Push image
echo -e "\n${YELLOW}[5/5] Pushing image to ECR...${NC}"
docker push ${ECR_URI}

echo -e "\n${GREEN}======================================${NC}"
echo -e "${GREEN}Push completed successfully!${NC}"
echo -e "${GREEN}======================================${NC}"
echo ""
echo "Image URI: ${ECR_URI}"
echo ""
echo "Next step:"
echo "Run ./deployment-scripts/create-lambda.sh to create the Lambda function"
