cd ~/react-production
npm run build:prod
rm -rf ~/../var/www/production_project/html
mv ~/production-project/build ~/../var/www/production_project/html
