const Router = require('koa-router'),
  fs = require('fs'),
  path = require('path');

const index = new Router({})

index.get('*', async (ctx, next) => {
  await ctx.send(ctx, '404.html', { root: __dirname + '/../views'})
  await next()
});

index.get('/', async (ctx, next) => {
  await ctx.send(ctx, 'index.html', { root: __dirname + '/../../client/dist'})
});

index.get('/sign_in', async (ctx, next) => {
  await ctx.send(ctx, 'sign_in.html', { root: __dirname + '/../../client/dist'})
});

index.get('/sign_up', async (ctx, next) => {
  await ctx.send(ctx, 'sign_up.html', { root: __dirname + '/../../client/dist'})
});

index.get('/order', async (ctx, next) => {
  await ctx.send(ctx, 'order.html', { root: __dirname + '/../../client/dist'})
});

index.get('/password', async (ctx, next) => {
  await ctx.send(ctx, 'password.html', { root: __dirname + '/../../client/dist'})
});

index.get('/billings', async (ctx, next) => {
  await ctx.send(ctx, 'billings.html', { root: __dirname + '/../../client/dist'})
});

index.get('/account', async (ctx, next) => {
  await ctx.send(ctx, 'account.html', { root: __dirname + '/../../client/dist'})
});

index.get('/payment', async (ctx, next) => {
  await ctx.send(ctx, 'payment.html', { root: __dirname + '/../../client/dist'})
});



module.exports = index;
