# Deployment Troubleshooting Flowchart

## START: Deployment Issue

### Issue Category Selection

```
┌─────────────────────────────────────────┐
│     What type of issue are you         │
│            experiencing?                 │
├─────────────────────────────────────────┤
│  [A] Build Issues                       │
│  [B] AWS Authentication Issues          │
│  [C] Docker Issues                      │
│  [D] ECR Push Issues                    │
│  [E] Lambda Creation Issues             │
│  [F] Runtime/Access Issues              │
└─────────────────────────────────────────┘
```

---

## [A] Build Issues

```
npm run build fails?
│
├─YES─► Error: "Cannot find module"
│       └─► Run: rm -rf node_modules && npm install
│
├─YES─► Error: "Out of memory"
│       └─► Increase Node memory: NODE_OPTIONS=--max_old_space_size=4096 npm run build
│
├─YES─► Build succeeds but no /build folder
│       └─► Check vite.config.ts → outDir: 'build'
│
└─NO──► Proceed to Docker build
```

---

## [B] AWS Authentication Issues

```
aws sts get-caller-identity fails?
│
├─YES─► Error: "Unable to locate credentials"
│       ├─► Run: aws configure
│       └─► Or: Check ~/.aws/credentials file exists
│
├─YES─► Error: "SignatureDoesNotMatch"
│       ├─► Verify Access Key ID is correct
│       ├─► Verify Secret Access Key is correct
│       └─► Check for extra spaces in credentials
│
├─YES─► Error: "ExpiredToken"
│       └─► Get new credentials from AWS Console
│
└─NO──► Authentication working ✓
```

---

## [C] Docker Issues

```
Docker command fails?
│
├─YES─► Error: "Cannot connect to Docker daemon"
│       ├─► Is Docker Desktop running?
│       ├─► Linux: sudo systemctl start docker
│       └─► Check: docker info
│
├─YES─► Error: "Permission denied"
│       ├─► Linux: sudo usermod -aG docker $USER
│       └─► Then: newgrp docker
│
├─YES─► Build fails with "COPY failed"
│       ├─► Verify build/ folder exists
│       └─► Run npm run build first
│
└─NO──► Docker working ✓
```

---

## [D] ECR Push Issues

```
ECR push fails?
│
├─YES─► Error: "no basic auth credentials"
│       └─► Run ECR login again:
│           aws ecr get-login-password --region us-east-1 | \
│           docker login --username AWS --password-stdin \
│           ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com
│
├─YES─► Error: "RepositoryNotFoundException"
│       └─► Create repository:
│           aws ecr create-repository --repository-name elshaddai-cloud-solutions
│
├─YES─► Error: "AccessDeniedException"
│       └─► IAM user needs ECR permissions:
│           - ecr:CreateRepository
│           - ecr:PutImage
│           - ecr:InitiateLayerUpload
│           - ecr:UploadLayerPart
│           - ecr:CompleteLayerUpload
│
├─YES─► Push is very slow
│       └─► Normal for first push (image is ~200-300MB)
│           Subsequent pushes are faster (layers cached)
│
└─NO──► Push successful ✓
```

---

## [E] Lambda Creation Issues

```
Lambda creation fails?
│
├─YES─► Error: "The role defined for the function cannot be assumed"
│       ├─► Wait 10-15 seconds for IAM role to propagate
│       └─► Or: Create role manually first
│
├─YES─► Error: "ResourceConflictException"
│       └─► Function already exists
│           Use update instead:
│           aws lambda update-function-code \
│             --function-name elshaddai-cloud-solutions-website \
│             --image-uri IMAGE_URI
│
├─YES─► Error: "InvalidParameterValueException"
│       ├─► Verify image URI is correct
│       ├─► Check image exists in ECR
│       └─► Format: ACCOUNT.dkr.ecr.REGION.amazonaws.com/REPO:TAG
│
├─YES─► Error: "CodeStorageExceededException"
│       └─► Delete old Lambda functions or contact AWS support
│
└─NO──► Lambda created ✓
```

---

## [F] Runtime/Access Issues

```
Function URL returns error?
│
├─YES─► Error: 502 Bad Gateway
│       ├─► Check Lambda logs:
│       │   aws logs tail /aws/lambda/elshaddai-cloud-solutions-website
│       ├─► Common causes:
│       │   - Function timeout (increase to 60s)
│       │   - Out of memory (increase to 2048MB)
│       │   - Handler misconfiguration
│       └─► Verify handler: lambda-server.handler
│
├─YES─► Error: 403 Forbidden
│       └─► Function URL not configured or lacks permissions
│           Run: ./deployment-scripts/create-lambda.sh
│
├─YES─► Error: 404 Not Found on routes
│       └─► React Router issue
│           - Verify lambda-server.js has catch-all route
│           - All routes should serve index.html
│
├─YES─► Page loads but images/CSS missing
│       ├─► Check build folder has assets/
│       ├─► Verify static file serving in lambda-server.js
│       └─► Check browser console for 404s
│
├─YES─► Very slow first load
│       └─► Normal! Lambda cold start (~2-5 seconds)
│           Subsequent requests are faster
│
└─NO──► Everything working! 🎉
```

---

## Quick Diagnostic Commands

```bash
# 1. Check prerequisites
docker --version
node --version
aws --version
aws sts get-caller-identity

# 2. Check AWS resources
aws ecr describe-repositories --repository-names elshaddai-cloud-solutions
aws lambda get-function --function-name elshaddai-cloud-solutions-website
aws lambda get-function-url-config --function-name elshaddai-cloud-solutions-website

# 3. Check Lambda status
aws lambda get-function-configuration --function-name elshaddai-cloud-solutions-website

# 4. View recent logs
aws logs tail /aws/lambda/elshaddai-cloud-solutions-website --since 1h

# 5. Test Lambda locally (before deploying)
docker run -p 9000:8080 elshaddai-cloud-solutions:latest
curl http://localhost:9000/

# 6. Force update Lambda
aws lambda update-function-code \
  --function-name elshaddai-cloud-solutions-website \
  --image-uri $(aws sts get-caller-identity --query Account --output text).dkr.ecr.us-east-1.amazonaws.com/elshaddai-cloud-solutions:latest
```

---

## Still Having Issues?

### 1. Check CloudWatch Logs
```bash
aws logs tail /aws/lambda/elshaddai-cloud-solutions-website --follow
```

### 2. Verify All Resources
```bash
# ECR repository exists?
aws ecr describe-repositories --repository-names elshaddai-cloud-solutions

# Lambda function exists?
aws lambda get-function --function-name elshaddai-cloud-solutions-website

# IAM role exists?
aws iam get-role --role-name elshaddai-cloud-solutions-website-role
```

### 3. Clean Slate Approach
```bash
# Delete everything and start fresh
aws lambda delete-function --function-name elshaddai-cloud-solutions-website
aws ecr delete-repository --repository-name elshaddai-cloud-solutions --force
# Then redeploy from scratch
```

### 4. Contact Support
- AWS Support (if you have support plan)
- AWS Forums: https://forums.aws.amazon.com/
- Stack Overflow with tag `aws-lambda`

---

## Prevention Tips

✅ **Before Each Deployment:**
- Verify Docker is running
- Test AWS credentials: `aws sts get-caller-identity`
- Ensure clean build: `npm run build`
- Test Docker image locally first

✅ **After Each Deployment:**
- Test Function URL immediately
- Check CloudWatch logs for errors
- Verify all pages load correctly
- Test on different devices/browsers

✅ **Regular Maintenance:**
- Monitor CloudWatch metrics
- Set up billing alerts
- Review and clean old ECR images
- Update dependencies regularly

---

**Last Updated**: March 27, 2026
