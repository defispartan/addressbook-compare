This repo is a tool to compare two versions of the @bgd-labs/aave-address-book repo and generate a difference comparison.

Usage:

Update package versions to compare in v1/package.json and v2/package.json, then run:

`cd v1 && yarn install && cd ../v2 && yarn install && cd ../ && node compare.js`
