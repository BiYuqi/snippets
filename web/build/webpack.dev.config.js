const path = require('path')
const webpackAutoFindPort = require('webpack-auto-find-port')
const chalk = require('chalk')
const merge = require('webpack-merge')
const webpack = require('webpack')
const webpackBaseConfig = require('./webpack.base.config')

const webpackDevConfig = merge(webpackBaseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(`${process.cwd()}`, '../dist/index.html'),
    publicPath: '/',
    compress: true,
    noInfo: true,
    disableHostCheck: true,
    open: true,
    inline: true,
    port: 8080
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})

module.exports = webpackAutoFindPort({
  config: webpackDevConfig,
  logger: (port) => {
    console.log(chalk.green(`Project is Running at ${port}`))
  }
})