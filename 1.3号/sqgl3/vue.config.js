
module.exports = {
  lintOnSave: false,
  // 根目录
  publicPath: "./",
  // 默认关闭生产环境的资源
  productionSourceMap: true,
  // 打包的时候文件夹名称
  outputDir: "dist",
  // 放置打包时静态资源文件生成的存放位置  js css img
  assetsDir: "assets",
  // 本地的环境代理配置
  devServer: {
    //  端口号
    port: "8080",
    /**
     * 开发运行时域名，设置成'0.0.0.0'，在同一个局域网下，如果你的项目在运行，
     * 同时可以通过你的http://ip:port/...访问你的项目
     **/
    host: "localhost",
    //  默认是否打开浏览器
    open: false,
    //  是否启用https
    https: false,
    // 本地端口号的代理
    proxy: {
    "/api": {
      // 默认开启代理模式
      changeOrigin: true,
      // 如果是http接口，需要配置该参数
      secure: false,
      // 代理的地址
      target: `http://localhost:8090`,
      // 路径的重命名
      pathRewrite: {
        "^/api": ""
      }
    }
  }
  }
}
