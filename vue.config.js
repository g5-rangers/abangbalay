const path = require('path');
// let BACKEND_URL_LIVE = 'http://172.6.3.21:3000'
// let BACKEND_URL_DEV = 'http://localhost:3000'
// let isDev = false

// export default{
//   BACKEND_URL: isDev? BACKEND_URL_DEV : BACKEND_URL_LIVE
// }
module.exports = {
  
  configureWebpack: {
    
    resolve: {
      
      alias: {
        "src": path.resolve(__dirname, 'src/'),
        "assets": path.resolve(__dirname, 'src/assets'),
        "components": path.resolve(__dirname, 'src/components'),
        "router": path.resolve(__dirname, 'src/router'),
        "modules": path.resolve(__dirname, 'src/modules'),
        "services": path.resolve(__dirname, 'src/services')
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}
