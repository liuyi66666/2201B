// const {defineConfig} =require("@vue/cli-service")
module.exports = {
  // lintOnSave: false
  // 根目录
  publicPath: './',
  // 默认关闭生产环境的资源
  productionSourceMap: false,
  // 打包时候文件名称
  outputDir: 'dist',
  // 放置打包时静态资源文件生成的存放位置
  assetsDir: 'assets',
  // 本地的环境代理配置
  devServer: {
    // 端口号
    port: '8888',
    // 域名
    host: 'localhost',
    // 默认是否打浏览器
    open: true,
    // 启用https
    https: false

    // proxy:{
    // 	"/api":{
    // 		// 默认开启代理模式
    // 		changeOrigin:true,
    // 		secure:false,
    // 		target:"url",
    // 		// 路径
    // 		pathRewrite:{
    // 			"^/api":""
    // 		}

    // 	}
    // }
  }
}
