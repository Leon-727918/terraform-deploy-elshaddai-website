#!/bin/bash

# Build script for AWS Lambda deployment
# This script builds the React app and creates the Docker image

set -e

echo "======================================"
echo "Building Elshaddai Cloud Solutions"
echo "for AWS Lambda Deployment"
echo "======================================"

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Build React production bundle
echo -e "\n${YELLOW}[1/3] Building React production bundle...${NC}"
npm run build

if [ ! -d "build" ]; then
    echo "Error: Build directory not found!"
    exit 1
fi

echo -e "${GREEN}✓ React build completed${NC}"

# Step 2: Build Docker image
echo -e "\n${YELLOW}[2/3] Building Docker image...${NC}"
IMAGE_NAME="elshaddai-cloud-solutions"
IMAGE_TAG="latest"

docker build -f Dockerfile.lambda -t ${IMAGE_NAME}:${IMAGE_TAG} .

echo -e "${GREEN}✓ Docker image built: ${IMAGE_NAME}:${IMAGE_TAG}${NC}"

# Step 3: Test Docker image locally (optional)
echo -e "\n${YELLOW}[3/3] Testing Docker image locally...${NC}"
echo "To test locally, run:"
echo "docker run -p 9000:8080 ${IMAGE_NAME}:${IMAGE_TAG}"
echo "Then visit: http://localhost:9000/"

echo -e "\n${GREEN}======================================${NC}"
echo -e "${GREEN}Build completed successfully!${NC}"
echo -e "${GREEN}======================================${NC}"
echo ""
echo "Next steps:"
echo "1. Run ./deployment-scripts/push-to-ecr.sh to push to AWS ECR"
echo "2. Run ./deployment-scripts/create-lambda.sh to create Lambda function"
