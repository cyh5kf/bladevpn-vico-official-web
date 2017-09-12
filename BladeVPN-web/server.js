var express = require('express');
var app = express();

//指定静态文件的位置
app.use('/', express.static(__dirname)); 

//监听端口号
app.listen(8080,'0.0.0.0');