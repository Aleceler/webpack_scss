const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const produto = require('./product.json')

console.log(produto)
const config = {
  entry: `./src/${produto.product}/index.js`,
  output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, `${produto.product}`)
  },
  module: {
    rules: [
        {
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                { loader: 'css-loader', options: { url: false, sourceMap: true } },
                { loader: 'sass-loader', options: { sourceMap: true } }
            ],
        },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: "style.css"
    })
    
],
}

module.exports = config;


