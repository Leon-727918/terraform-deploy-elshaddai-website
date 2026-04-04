# Quick Deployment Guide 🚀

## Prerequisites Check
```bash
# Verify installations
docker --version          # Should show Docker version
node --version           # Should show Node v18+
aws --version           # Should show AWS CLI version
aws sts get-caller-identity  # Should show your AWS account
```

## Three-Step Deployment

### 1️⃣ Build
```bash
cd /app
./deployment-scripts/build.sh
```
**Expected**: ✓ React build + Docker image created

### 2️⃣ Push to AWS
```bash
./deployment-scripts/push-to-ecr.sh
```
**Expected**: ✓ Image uploaded to AWS ECR

### 3️⃣ Deploy Lambda
```bash
./deployment-scripts/create-lambda.sh
```
**Expected**: ✓ Function URL displayed

## Your App URL
After step 3, copy the Function URL from the output:
```
Function URL: https://xxxxxx.lambda-url.us-east-1.on.aws/
```

## Update After Changes
```bash
./deployment-scripts/build.sh
./deployment-scripts/push-to-ecr.sh
./deployment-scripts/create-lambda.sh
```

## Troubleshooting

### "AWS CLI not configured"
```bash
aws configure
# Enter your Access Key ID and Secret Access Key
```

### "Docker not running"
```bash
# Start Docker Desktop
# Or on Linux: sudo systemctl start docker
```

### "Permission denied"
```bash
chmod +x deployment-scripts/*.sh
```

### "Build failed"
```bash
rm -rf node_modules
npm install
npm run build
```

## View Logs
```bash
aws logs tail /aws/lambda/elshaddai-cloud-solutions-website --follow
```

## Cost
- Free tier: 1M requests/month FREE
- Typical usage: $2-5/month

## Files Reference
- `Dockerfile.lambda` - Container configuration
- `lambda-server.js` - Express server for Lambda
- `deployment-scripts/` - Automated scripts
- `DEPLOYMENT.md` - Full documentation

---

**Need help?** See full guide in `DEPLOYMENT.md`
