const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const webpackBaseConfig = require('./webpack.base.config')

module.exports = webpackMerge(webpackBaseConfig, {
  mode: 'production',
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
          minSize: 1,
          priority: 0
        },
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 10
        }
      }
    },
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          cache: true,
          parallel: true,
          warnings: false,
          comments: false,
          compress: {
            drop_console: true
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),

    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
  ]
})
