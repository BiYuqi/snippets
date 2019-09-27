const path = require('path')

const isProd = process.env.NODE_ENV === 'production'

/**
 * get file path
 * @param {*} dir 
 */
const resolve = dir => {
  return path.join(__dirname, dir)
}

/**
 * get the config for webpack build
 * @param {*} env 
 */
const webpackOutConfig = (env) => {
  return env ? {
    filename: 'js/[name].[chunkhash].js',
    chunkFilename: 'js/[name].[id].[chunkhash].js'
  } : {
    filename: 'js/[name].js',
  }
}
/**
 * set eslint
 */
const webpackEslintConfig = () => ({
  test: /\.js$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: resolve('../src'),
  options: {
    formatter: require('eslint-friendly-formatter')
  }
})

module.exports = {
  isProd,
  resolve,
  webpackEslintConfig,
  webpackOutConfig
}
