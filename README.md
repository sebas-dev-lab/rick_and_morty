## Challenge ##

**DEMO LINK**
http://sebastianding.s3-website-us-east-1.amazonaws.com/


> Install

- node > v12

- clone repo: https://github.com/sebas-dev-lab/rick_and_morty.git

- touch .env file

- add enviroments:

`
### ====================== Service config ===================== ###

NODE_ENV= 

(local: NODE_ENV=development && build && deploy: NODE_ENV=production)

### ====================== External Links ===================== ###

RM_FACEBOOK=https://www.facebook.com/RickandMorty/
RM_TWEETER=https://twitter.com/rickandmorty
RM_PINTEREST=https://ar.pinterest.com/migue_cas_97/rick-and-morty/
RM_INSTAGRAM=https://www.instagram.com/rickandmorty/?hl=es

### ====================== Api env ===================== ###

RM_BASEURL=https://rickandmortyapi.com/api

`
> Start local project

- NODE_ENV=development

- npm start - to local start project

> Deploy: 

**Prerequisites**

- Need AWS account credentials (key and api key)
- Conifgure aws cli on your computer (install and apply configuration)
- aws configurare to introduce your aws credentials
- Create bucket S3 and grant public access
- Change package.json - scripts - deploy with S3 bucket name (aws s3 sync dist/ s3://${here} --acl public-read)

**Deploy**

1) Change NODE_ENV enviroment to production

2) npm run build

3) npm run deploy




