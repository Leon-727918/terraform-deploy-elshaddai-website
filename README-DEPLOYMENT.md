# 📦 AWS Lambda Deployment Package
## Elshaddai Cloud Solutions Website

This package contains everything needed to deploy the Elshaddai Cloud Solutions React application to AWS Lambda using Docker containers.

---

## 📁 Package Contents

```
/app/
├── build/                          # Production React build (generated)
├── deployment-scripts/
│   ├── build.sh                   # Build React + Docker image
│   ├── push-to-ecr.sh            # Push to AWS ECR
│   └── create-lambda.sh          # Create/update Lambda function
├── Dockerfile.lambda              # Lambda-optimized Dockerfile
├── lambda-server.js              # Express server for Lambda
├── DEPLOYMENT.md                 # Complete deployment guide
├── QUICK-START.md               # Quick reference
└── README-DEPLOYMENT.md         # This file
```

---

## 🎯 What This Does

Deploys your React application to **AWS Lambda** as a **serverless application**:

- ✅ **No servers to manage** - AWS handles infrastructure
- ✅ **Pay per use** - Only charged when visitors access your site
- ✅ **Auto-scaling** - Handles traffic spikes automatically
- ✅ **Public URL** - Get instant HTTPS endpoint
- ✅ **Container-based** - Uses Docker for consistent deployment

---

## 🚀 Getting Started

### Option 1: Automated Scripts (Recommended)

```bash
# Step 1: Configure AWS
aws configure
# Enter your credentials when prompted

# Step 2: Deploy
cd /app
./deployment-scripts/build.sh
./deployment-scripts/push-to-ecr.sh
./deployment-scripts/create-lambda.sh

# Step 3: Get your URL from the output
```

### Option 2: Manual Deployment

See detailed steps in `DEPLOYMENT.md`

---

## 📋 Prerequisites

You need these installed on your computer:

1. **Docker Desktop** - [Download](https://www.docker.com/products/docker-desktop)
2. **AWS CLI** - [Install Guide](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
3. **Node.js** (v18+) - [Download](https://nodejs.org/)
4. **AWS Account** - [Sign Up](https://aws.amazon.com/)

### Verify Prerequisites

```bash
docker --version     # Should show: Docker version 20.x or higher
aws --version       # Should show: aws-cli/2.x
node --version      # Should show: v18.x or higher
```

---

## 🔑 AWS Setup

### 1. Create AWS Account
If you don't have one: https://aws.amazon.com/free/

### 2. Create IAM User

1. Go to AWS Console → IAM → Users
2. Click "Add User"
3. Username: `lambda-deployer`
4. Select "Programmatic access"
5. Attach policies:
   - `AWSLambda_FullAccess`
   - `AmazonEC2ContainerRegistryFullAccess`
   - `IAMFullAccess`
6. Save the **Access Key ID** and **Secret Access Key**

### 3. Configure AWS CLI

```bash
aws configure
```

Enter:
- AWS Access Key ID: `[Your Access Key]`
- AWS Secret Access Key: `[Your Secret Key]`
- Default region: `us-east-1`
- Default output: `json`

### 4. Test Configuration

```bash
aws sts get-caller-identity
```

Should show your AWS account ID and user ARN.

---

## 📖 Documentation

- **QUICK-START.md** - Three commands to deploy
- **DEPLOYMENT.md** - Complete guide with troubleshooting
- **This file** - Package overview

---

## 🔄 Deployment Workflow

```
┌─────────────┐
│   Changes   │
│   to Code   │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ npm build   │ ← Builds React production bundle
└──────┬──────┘
       │
       ▼
┌─────────────┐
│Docker Build │ ← Creates container image
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Push ECR   │ ← Uploads to AWS Registry
└──────┬──────┘
       │
       ▼
┌─────────────┐
│Create Lambda│ ← Deploys to Lambda
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Live URL   │ ← Your app is online!
└─────────────┘
```

---

## 💡 Key Features Deployed

Your deployed application includes:

- ✅ Cloud Solutions page with Azure, AWS, GCP sections
- ✅ Agentic AI showcase
- ✅ All navigation and routing
- ✅ Artistic background images
- ✅ Responsive design
- ✅ Professional UI/UX
- ✅ Contact forms
- ✅ All interactive features

---

## 💰 Cost Breakdown

### Free Tier (First 12 months)
- 1 million Lambda requests/month - **FREE**
- 400,000 GB-seconds compute - **FREE**

### After Free Tier
For a typical business website:

| Traffic | Monthly Cost |
|---------|-------------|
| 10,000 visitors | **FREE** |
| 50,000 visitors | ~$1-2 |
| 100,000 visitors | ~$3-5 |
| 500,000 visitors | ~$15-20 |

**Note**: Actual costs vary by traffic patterns and usage.

---

## 🛠️ Common Tasks

### Update Your Site

```bash
# After making changes to code
./deployment-scripts/build.sh
./deployment-scripts/push-to-ecr.sh
./deployment-scripts/create-lambda.sh
```

### View Logs

```bash
aws logs tail /aws/lambda/elshaddai-cloud-solutions-website --follow
```

### Check Function Status

```bash
aws lambda get-function --function-name elshaddai-cloud-solutions-website
```

### Get Function URL

```bash
aws lambda get-function-url-config \
  --function-name elshaddai-cloud-solutions-website
```

---

## 🐛 Troubleshooting

### Script Permission Error
```bash
chmod +x deployment-scripts/*.sh
```

### AWS Authentication Error
```bash
aws configure
# Re-enter your credentials
```

### Docker Not Running
- Start Docker Desktop
- Or: `sudo systemctl start docker` (Linux)

### Build Fails
```bash
rm -rf node_modules build
npm install
npm run build
```

### Function Times Out
```bash
# Increase timeout to 60 seconds
aws lambda update-function-configuration \
  --function-name elshaddai-cloud-solutions-website \
  --timeout 60
```

For more help, see `DEPLOYMENT.md` troubleshooting section.

---

## 🔐 Security Notes

### After Deployment

1. **Rotate AWS credentials** used for deployment
2. **Enable CloudWatch logging** (done automatically)
3. **Monitor Function URL usage**
4. **Set up billing alerts**

### AWS Billing Alert

```bash
# Set up alert for unexpected costs
aws cloudwatch put-metric-alarm \
  --alarm-name lambda-billing-alarm \
  --alarm-description "Alert when Lambda costs exceed $10" \
  --metric-name EstimatedCharges \
  --namespace AWS/Billing \
  --statistic Maximum \
  --period 21600 \
  --threshold 10 \
  --comparison-operator GreaterThanThreshold
```

---

## 📊 Monitoring

### CloudWatch Dashboard

View metrics in AWS Console:
1. Go to CloudWatch → Dashboards
2. Create dashboard for Lambda function
3. Add widgets for:
   - Invocations
   - Errors
   - Duration
   - Throttles

### Logs

Automatically sent to:
```
CloudWatch Logs → /aws/lambda/elshaddai-cloud-solutions-website
```

---

## 🗑️ Cleanup

To remove all resources and stop costs:

```bash
# Delete Lambda function
aws lambda delete-function \
  --function-name elshaddai-cloud-solutions-website

# Delete ECR repository
aws ecr delete-repository \
  --repository-name elshaddai-cloud-solutions \
  --force

# Delete IAM role
aws iam detach-role-policy \
  --role-name elshaddai-cloud-solutions-website-role \
  --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole

aws iam delete-role \
  --role-name elshaddai-cloud-solutions-website-role
```

---

## 📞 Support

### Documentation
- Full guide: `DEPLOYMENT.md`
- Quick start: `QUICK-START.md`
- AWS Lambda docs: https://docs.aws.amazon.com/lambda/

### Common Issues
See troubleshooting sections in `DEPLOYMENT.md`

---

## ✅ Deployment Checklist

Before deploying:
- [ ] Docker installed and running
- [ ] AWS CLI installed
- [ ] AWS credentials configured
- [ ] IAM user has required permissions
- [ ] Node.js installed
- [ ] Project dependencies installed (`npm install`)

After deploying:
- [ ] Function URL accessible
- [ ] All pages load correctly
- [ ] CloudWatch logs visible
- [ ] Billing alerts configured
- [ ] AWS credentials rotated

---

## 🎉 Success!

Once deployed, you'll have:
- ✅ Serverless React application on AWS Lambda
- ✅ Public HTTPS URL
- ✅ Auto-scaling infrastructure
- ✅ CloudWatch monitoring
- ✅ Pay-per-use billing

---

**Last Updated**: March 27, 2026  
**Function Name**: elshaddai-cloud-solutions-website  
**Region**: us-east-1  
**Package Version**: 1.0.0
