const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/api', createProxyMiddleware({
    target: 'https://newsapi.org/v2/',
    changeOrigin: true,
  }));
};