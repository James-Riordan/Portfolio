const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
/*
* @type {import('next').NextConfig}
*/
module.exports = {
  images:{
    loader: "imgix",
    path: "",
  },
  exportPathMap: {},
}
  /*withPlugins([
  [optimizedImages, {
  }],
  
  // your other plugins here

]);*/