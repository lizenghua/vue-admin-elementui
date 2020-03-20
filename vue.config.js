/*
 * @Author: lzh
 * @since: 2020-03-20 11:31:59
 * @lastTime: 2020-03-20 17:07:57
 * @LastAuthor: lzh
 * @message:
 */
const path = require('path')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
  outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devdist',
  lintOnSave: true, //eslint-loader 是否在保存的时候检查
  configureWebpack: config => {
    config.resolve = {
      extensions: ['.js', '.json', '.vue'], //自动添加文件名后缀
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@css': path.resolve(__dirname, './src/styles'),
        '@coms': path.resolve(__dirname, './src/components'),
        '@views': path.resolve(__dirname, './src/views')
      }
    }
  },
  css: {
    extract: true, //是否使用css分离插件 ExtractTextPlugin
    sourceMap: false,
    loaderOptions: {
      //全局样式配置
      scss: {
        prependData: `@import "./src/styles/main.scss";`
      }
    }
  }
}
