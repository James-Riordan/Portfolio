#!/bin/bash

yarn build
cp -a CNAME out/
cd out 

git init
git remote add origin "https://github.com/James-Riordan/Portfolio"

git checkout -b github-pages
git add .
git commit -m "Updated Build"
git push --set-upstream origin github-pages --force