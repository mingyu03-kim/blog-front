const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'quasar'
  ],

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
  devServer: {
    proxy: {      
      '/user': {
          target: 'http://localhost:8080/',
          changeOrigin: true // cross origin 허용 
      }
    }
}
})
