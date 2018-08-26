//引入express框架
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
//创建服务器
const app = express();

//告诉express项目使用的是哪一种模板引擎

//开放静态资源模板

app.use();
//配置模板引擎
app.engine('handlebars', exphbs({
    partialsDir: [{
        dir: path.join(__dirname, 'views', 'home', 'partials')
    }, {
        dir: path.join(__dirname, 'views', 'admin', 'partials')
    }]
}));
//指定模板后缀
app.set('view engine', 'handlebars');
//指定模板的路径
app.set('views', path.join(__dirname, 'views'));


//当客户发送请求时
app.get('/index', (req, res) => {
    res.send('home/index.handlebars');
})

//监听端口
app.listen(3000, err => {
    if (!err) {
        console.log('服务器已开启');

    }
});