const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
/*
* @type {import('next').NextConfig}
*/
module.exports = {
  images:{
    loader: "imgix",
    path: "/src/",
  },
}
  /*withPlugins([
  [optimizedImages, {
  }],
  
  // your other plugins here

]);*/