const Router = require('koa-router'),
  jwtAuth = require('../middleware/jwtAuth'),
  getHtmlCode = require('./payment'),
  login = require('./login');

const api = new Router({
  prefix: '/api'
})

//登录接口
api.get('/login/doLogin', login);

//获取getHtmlCode接口
api.get('/payment/getHtmlCode', getHtmlCode);


module.exports = api;
