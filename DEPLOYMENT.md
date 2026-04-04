# AWS Lambda Deployment Guide
## Elshaddai Cloud Solutions Website

This guide will help you deploy the Elshaddai Cloud Solutions React application to AWS Lambda using Docker containers.

---

## 📋 Prerequisites

Before starting, ensure you have:

1. **AWS Account** with appropriate permissions
2. **AWS CLI** installed and configured
3. **Docker** installed and running
4. **Node.js** (v18 or higher) and npm installed
5. **Git** (optional, for version control)

---

## 🚀 Quick Start Deployment

### Step 1: Configure AWS CLI

```bash
# Configure your AWS credentials
aws configure

# Enter your credentials when prompted:
# AWS Access Key ID: YOUR_ACCESS_KEY_ID
# AWS Secret Access Key: YOUR_SECRET_ACCESS_KEY
# Default region: us-east-1
# Default output format: json

# Verify configuration
aws sts get-caller-identity
```

### Step 2: Build the Application

```bash
# Navigate to project directory
cd /app

# Run the build script
./deployment-scripts/build.sh
```

This script will:
- Build the React production bundle
- Create the Docker image
- Tag it as `elshaddai-cloud-solutions:latest`

### Step 3: Push to AWS ECR

```bash
# Push Docker image to Amazon Elastic Container Registry
./deployment-scripts/push-to-ecr.sh
```

This script will:
- Create ECR repository (if it doesn't exist)
- Login to ECR
- Tag and push your Docker image

### Step 4: Create Lambda Function

```bash
# Create/Update Lambda function
./deployment-scripts/create-lambda.sh
```

This script will:
- Create IAM role for Lambda
- Create Lambda function from container image
- Set up Function URL for public access
- Display your live application URL

### Step 5: Access Your Application

After deployment completes, you'll see output like:

```
======================================
Deployment completed successfully!
======================================

Function Name: elshaddai-cloud-solutions-website
Region: us-east-1
Function URL: https://xxxxxx.lambda-url.us-east-1.on.aws/

Your app is now live!
```

Visit the Function URL to access your deployed application! 🎉

---

## 📦 What Gets Deployed

### Application Components

- **React Frontend**: Production-built static files
- **Express Server**: Serves React app and handles routing
- **Docker Container**: Lambda-compatible container image
- **AWS Lambda**: Serverless compute running your app
- **Function URL**: Public HTTPS endpoint

### AWS Resources Created

1. **ECR Repository**: `elshaddai-cloud-solutions`
2. **Lambda Function**: `elshaddai-cloud-solutions-website`
3. **IAM Role**: `elshaddai-cloud-solutions-website-role`
4. **Function URL**: Public HTTPS endpoint

---

## 🔧 Manual Deployment Steps

If you prefer manual deployment or the scripts don't work:

### 1. Build React App

```bash
npm install
npm run build
```

### 2. Build Docker Image

```bash
docker build -f Dockerfile.lambda -t elshaddai-cloud-solutions:latest .
```

### 3. Test Locally (Optional)

```bash
# Run container locally
docker run -p 9000:8080 elshaddai-cloud-solutions:latest

# Test in another terminal
curl http://localhost:9000/
```

### 4. Create ECR Repository

```bash
# Set variables
REGION=us-east-1
REPO_NAME=elshaddai-cloud-solutions
ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)

# Create repository
aws ecr create-repository \
    --repository-name ${REPO_NAME} \
    --region ${REGION}
```

### 5. Push to ECR

```bash
# Login to ECR
aws ecr get-login-password --region ${REGION} | \
docker login --username AWS --password-stdin ${ACCOUNT_ID}.dkr.ecr.${REGION}.amazonaws.com

# Tag image
docker tag elshaddai-cloud-solutions:latest \
    ${ACCOUNT_ID}.dkr.ecr.${REGION}.amazonaws.com/${REPO_NAME}:latest

# Push image
docker push ${ACCOUNT_ID}.dkr.ecr.${REGION}.amazonaws.com/${REPO_NAME}:latest
```

### 6. Create IAM Role

```bash
ROLE_NAME=elshaddai-cloud-solutions-website-role

# Create trust policy
cat > trust-policy.json << 'EOF'
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
    --assume-role-policy-document file://trust-policy.json

# Attach execution policy
aws iam attach-role-policy \
    --role-name ${ROLE_NAME} \
    --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole

# Get role ARN
ROLE_ARN=$(aws iam get-role --role-name ${ROLE_NAME} --query 'Role.Arn' --output text)
```

### 7. Create Lambda Function

```bash
FUNCTION_NAME=elshaddai-cloud-solutions-website
IMAGE_URI=${ACCOUNT_ID}.dkr.ecr.${REGION}.amazonaws.com/${REPO_NAME}:latest

# Create function
aws lambda create-function \
    --function-name ${FUNCTION_NAME} \
    --package-type Image \
    --code ImageUri=${IMAGE_URI} \
    --role ${ROLE_ARN} \
    --timeout 30 \
    --memory-size 1024 \
    --region ${REGION}
```

### 8. Create Function URL

```bash
# Create public URL
aws lambda create-function-url-config \
    --function-name ${FUNCTION_NAME} \
    --auth-type NONE \
    --region ${REGION}

# Add permission
aws lambda add-permission \
    --function-name ${FUNCTION_NAME} \
    --statement-id FunctionURLAllowPublicAccess \
    --action lambda:InvokeFunctionUrl \
    --principal "*" \
    --function-url-auth-type NONE \
    --region ${REGION}

# Get URL
aws lambda get-function-url-config \
    --function-name ${FUNCTION_NAME} \
    --region ${REGION}
```

---

## 🔄 Updating Your Application

When you make changes to your app:

```bash
# 1. Build new version
./deployment-scripts/build.sh

# 2. Push to ECR
./deployment-scripts/push-to-ecr.sh

# 3. Update Lambda
./deployment-scripts/create-lambda.sh
```

Or manually:

```bash
# Build and push
npm run build
docker build -f Dockerfile.lambda -t elshaddai-cloud-solutions:latest .
docker tag elshaddai-cloud-solutions:latest ${ACCOUNT_ID}.dkr.ecr.${REGION}.amazonaws.com/${REPO_NAME}:latest
docker push ${ACCOUNT_ID}.dkr.ecr.${REGION}.amazonaws.com/${REPO_NAME}:latest

# Update Lambda
aws lambda update-function-code \
    --function-name elshaddai-cloud-solutions-website \
    --image-uri ${ACCOUNT_ID}.dkr.ecr.${REGION}.amazonaws.com/${REPO_NAME}:latest \
    --region us-east-1
```

---

## 🐛 Troubleshooting

### Build Issues

**Problem**: `npm run build` fails
```bash
# Solution: Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Problem**: Docker build fails
```bash
# Solution: Check Docker is running
docker info

# Clean Docker cache
docker system prune -a
```

### AWS CLI Issues

**Problem**: "Unable to locate credentials"
```bash
# Solution: Configure AWS CLI
aws configure

# Or set environment variables
export AWS_ACCESS_KEY_ID=your_access_key
export AWS_SECRET_ACCESS_KEY=your_secret_key
export AWS_DEFAULT_REGION=us-east-1
```

**Problem**: Permission denied
```bash
# Solution: Verify IAM permissions
# You need permissions for:
# - ECR (create repository, push images)
# - Lambda (create function, update code)
# - IAM (create roles, attach policies)
```

### Lambda Issues

**Problem**: Function times out
```bash
# Solution: Increase timeout
aws lambda update-function-configuration \
    --function-name elshaddai-cloud-solutions-website \
    --timeout 60 \
    --region us-east-1
```

**Problem**: Function out of memory
```bash
# Solution: Increase memory
aws lambda update-function-configuration \
    --function-name elshaddai-cloud-solutions-website \
    --memory-size 2048 \
    --region us-east-1
```

**Problem**: Cannot access Function URL
```bash
# Solution: Verify Function URL exists
aws lambda get-function-url-config \
    --function-name elshaddai-cloud-solutions-website \
    --region us-east-1

# If not, create it
./deployment-scripts/create-lambda.sh
```

### Viewing Logs

```bash
# View Lambda logs
aws logs tail /aws/lambda/elshaddai-cloud-solutions-website --follow

# Or use AWS Console
# CloudWatch > Log groups > /aws/lambda/elshaddai-cloud-solutions-website
```

---

## 💰 Cost Estimation

AWS Lambda pricing (as of 2025):

- **Requests**: $0.20 per 1M requests
- **Duration**: $0.0000166667 per GB-second
- **Free Tier**: 
  - 1M requests per month
  - 400,000 GB-seconds per month

**Example Cost** (1024 MB memory, 1 second average execution):
- 10,000 requests/month: **FREE** (within free tier)
- 100,000 requests/month: **~$2-3/month**
- 1,000,000 requests/month: **~$20-25/month**

**ECR Storage**: $0.10 per GB/month (~$0.15/month for this app)

---

## 🔐 Security Best Practices

### 1. Rotate AWS Credentials

```bash
# After deployment, create new credentials and delete old ones
aws iam create-access-key --user-name YOUR_USERNAME
aws iam delete-access-key --access-key-id OLD_KEY_ID --user-name YOUR_USERNAME
```

### 2. Use IAM Roles with Minimal Permissions

Create a deployment user with only required permissions:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ecr:*",
        "lambda:*",
        "iam:CreateRole",
        "iam:AttachRolePolicy",
        "iam:PassRole"
      ],
      "Resource": "*"
    }
  ]
}
```

### 3. Enable CloudWatch Logging

Logs are automatically enabled. Monitor in AWS Console:
- CloudWatch > Log groups > `/aws/lambda/elshaddai-cloud-solutions-website`

### 4. Consider Using Custom Domain

Instead of Function URL, use:
- Route 53 for DNS
- API Gateway for custom domain
- CloudFront for CDN and HTTPS

---

## 📊 Monitoring & Maintenance

### View Function Metrics

```bash
# Get function info
aws lambda get-function --function-name elshaddai-cloud-solutions-website

# View metrics in CloudWatch
# Console > CloudWatch > Metrics > Lambda
```

### Set Up Alarms

```bash
# Example: Alert on errors
aws cloudwatch put-metric-alarm \
    --alarm-name lambda-errors \
    --alarm-description "Alert on Lambda errors" \
    --metric-name Errors \
    --namespace AWS/Lambda \
    --statistic Sum \
    --period 300 \
    --threshold 10 \
    --comparison-operator GreaterThanThreshold
```

---

## 🗑️ Cleanup / Deletion

To remove all resources:

```bash
# Delete Lambda function
aws lambda delete-function \
    --function-name elshaddai-cloud-solutions-website \
    --region us-east-1

# Delete ECR repository
aws ecr delete-repository \
    --repository-name elshaddai-cloud-solutions \
    --region us-east-1 \
    --force

# Delete IAM role
aws iam detach-role-policy \
    --role-name elshaddai-cloud-solutions-website-role \
    --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole

aws iam delete-role \
    --role-name elshaddai-cloud-solutions-website-role
```

---

## 📚 Additional Resources

- [AWS Lambda Documentation](https://docs.aws.amazon.com/lambda/)
- [AWS ECR Documentation](https://docs.aws.amazon.com/ecr/)
- [Docker Documentation](https://docs.docker.com/)
- [React Deployment Guide](https://create-react-app.dev/docs/deployment/)

---

## 🆘 Support

If you encounter issues:

1. Check the [Troubleshooting](#-troubleshooting) section
2. Review CloudWatch logs
3. Verify AWS credentials and permissions
4. Ensure all prerequisites are installed

---

## ✅ Checklist

Before deployment:
- [ ] AWS CLI installed and configured
- [ ] Docker installed and running
- [ ] Node.js and npm installed
- [ ] AWS credentials have required permissions
- [ ] Project dependencies installed (`npm install`)

After deployment:
- [ ] Function URL is accessible
- [ ] All pages load correctly
- [ ] Navigation works properly
- [ ] Background images display
- [ ] CloudWatch logs are available
- [ ] AWS credentials rotated for security

---

**Deployment Date**: March 27, 2026  
**Lambda Function**: elshaddai-cloud-solutions-website  
**Region**: us-east-1

🎉 **Happy Deploying!**
