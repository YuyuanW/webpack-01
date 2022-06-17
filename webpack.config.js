const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

const base = require('./webpack.config.base.js')


module.exports = {
  ...base,

  mode: "development", // enabled useful tools for development

  module: {
    
    rules: [
      ... base.module.rules,
      {
        test: /\.css$/,
        // use: [
        //   {
        //     loader: MiniCssExtractPlugin.loader,
        //     options: {
        //       publicPath: "/public/path/to/",
        //     },
        //   },
        //   "css-loader",
        // ],
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
}


