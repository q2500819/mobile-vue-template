const path = require('path')

module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      less: {
        modifyVars: { // 修改vant主题颜色变量
        }
      }
    }
  },
  chainWebpack: config => { // 全局引入样式表
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
    config.resolve.alias
      .set('@images', resolve('src/assets/images'))
      .set('@components', resolve('src/components'))
  }
}

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/css/global.styl')
      ],
    })
}

function resolve (dir) {
  console.log(__dirname)
  return path.join(__dirname, dir)
}