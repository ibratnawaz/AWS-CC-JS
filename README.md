# Shop Angular Cloudfront

Angular version: ~12.

## Get up and running

Prerequisites: NodeJS v14

Follow the steps:

- git clone
- npm i
- ng serve

## Task Completion links

#### Manual Deployment

Website hosted on S3 with public access (**Blue Header for this app**):
- http://angular-shopping-bucket.s3-website.ap-south-1.amazonaws.com/
- CloudFront distribution created for the above s3 bucket: https://d25nm8kse8xp3m.cloudfront.net/

***Note**: This web app can be access from any of the S3 or cloudfront url.*

<hr />

Website hosted on S3 but public access is not provided (**Pink Header for this app**):
- https://cloudfront-shopping-app.s3.ap-south-1.amazonaws.com/index.html
  - you will get access denied message.
- CloudFront distribution created for the above s3 bucket:
  - https://d1bstkh2r0etz1.cloudfront.net/

***Note** This web app can be access from cloudfront url only.*

<hr />

### Automated Deployment

After cloning the app, run the following script to automatically deploy the
web app to AWS S3.

- ng build
- npm run serverless:deploy

URL generated after automated deployment using serverless (**ReddishOrange Header for this app**):
  - When opening the app through deployed URL which you get after automated deployment is successful you will get **Access denied error**.
    - http://shop-app-serverless.s3-website.ap-south-1.amazonaws.com/
  - Can only be access through cloudfront url:
    - https://d3hcehv1ers4qk.cloudfront.net/
