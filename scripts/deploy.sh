#!/bin/bash

# Doc
# ./scripts/deploy.sh dev - Deploy to development server
# ./scripts/deploy.sh prod - Deploy to production server

# Variables
dev_server_address=ec2-18-163-124-78.ap-east-1.compute.amazonaws.com
prod_server_address=ec2-18-162-152-97.ap-east-1.compute.amazonaws.com
dist_path=dist
server_user=ubuntu
private_key_path=./scripts/.ssh/aws-hk-t3-medium.pem
backup_path=/home/$server_user/wehomebot-homepage
nginx_web_path=/etc/nginx/www/homepage
filename="homepage.$(date +%Y%m%d%H%M%S).tar.gz"

# Check environment
if [ "$1" == "dev" ]; then
  server_address=$dev_server_address
elif [ "$1" == "prod" ]; then
  server_address=$prod_server_address
else
  echo "Invalid environment"
  exit 1
fi

# Logs
echo
echo "Environment: $1"
echo "Server User: $server_user"
echo "Deploying to $server_address"
echo "Filename: $filename"
echo "Backup Path: $backup_path"
echo "Nginx Web Path: $nginx_web_path"
echo

# Build
echo "Build Stage"
pnpm i
pnpm run build -m production -l silent
echo

# Backup
echo "Backup to $1 Server"
tar -zcf $filename $dist_path
scp  -o "StrictHostKeyChecking no" -i $private_key_path $filename $server_user@$server_address:$backup_path
rm $filename
echo

# Deploy
echo "Deploy to $1"
rsync -avz -e "ssh -i $private_key_path" $dist_path/ $server_user@$server_address:$nginx_web_path