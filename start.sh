#!/bin/bash
npm install
echo "Installing node express"
cd web
echo "In web folder"
rm -rf dist
echo "remove dist folder"
npm install
npm run build
echo "Installing npm packages"
npm rebuild node-sass
echo "Installing node-sass"
cd ..
echo "In main folder"
npm start
echo "start server"