const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
      './base-config': path.resolve(__dirname, 'template/js/netlify-cms/base-config'),
      './js/SearchEngine.js': path.resolve(__dirname, 'template/js/custom-js/components/SearchEngine.js'),
    }
  }
})
