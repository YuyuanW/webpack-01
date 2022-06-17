const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {

  entry: "./src/index.js", // string | object | array
  
  output: {
   
    path: path.resolve(__dirname, "dist"), // string
   
    filename: 'index.[contenthash].js', // string
  },

  devtool :  'inline-source-map',
  
  devServer : {
    contentBase : './dist',
  },

  

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Custom template',
      // Load a custom template (lodash by default)
      template: './src/index.html'
    })
  ],
    

  module: {
    
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }]
      },
      {
        test: /\.less$/,
        loader: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.styl$/,
        loader: ["style-loader", "css-loader", "stylus-loader"] // 将 Stylus 文件编译为 CSS
      },

      {
        test: /\.scss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          // "sass-loader",
          {
            loader: 'sass-loader',
            options: {
              implementation: require('dart-sass'),
             },
          },
        ],
      },
      
    
    ],
  },
}


