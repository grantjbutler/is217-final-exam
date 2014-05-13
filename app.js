var path = require('path'),
	koa = require('koa'),
	_ = require('koa-route'),
	serve = require('koa-static'),
	body = require('koa-body'),
	app = koa();

app.use(serve(path.join(__dirname, 'public')));
app.use(body());

app.listen(3000);