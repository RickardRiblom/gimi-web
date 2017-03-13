# gimi-web

## Getting started ##
How to get this party started
```
git clone this repo
npm install
npm run dev
```

## Deployment
Heroku will run `heroku-postbuild` hook on code push to master and automatically build the assets. No additional steps required.
Following Config variables must be set in Heroku settings
```
NODE_ENV: production
NODE_MODULES_CACHE: false
NPM_CONFIG_PRODUCTION: false
```