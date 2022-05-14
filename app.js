//express 基本設定
var express = require('express')
var app = express();
var user = require('./routes/user');

//將route /user 和 user物件串在一起 引入到 /user/....的Route
app.use('/user',user);

app.get('/',function(req,res){
    res.send('簡易GET範例')
})



//移轉至routes 中 的 user.js 因為路由都是user
// app.get('/user',function(req,res){
//     res.send('網址/user的路由')
// })

// //動態路由
// app.get('/user/:name/:Code',function(req,res){
//     res.send('網址/user的路由,且傳參數name為"'+req.params.name+'",Code為"'+req.params.Code+'"')
//     //傳遞結果(當路由為/user/TestName/00123)=>   網址/user的路由,且傳參數name為"TestName",Code為"00123"
// })

// //動態路由 + url給參數 limit
// app.get('/user/:name',function(req,res){
//     var limit = req.query.limit
//     res.send('網址/user的路由,且傳參數name為"'+req.params.name+'",limit為"'+ limit+'"')
//     //傳遞結果(當路由為/user/TestName?limit=10)=>   網址/user的路由,且傳參數name為"TestName",limit為"10"
// })

//監聽 port
var port = process.env.PORT || 3005;
app.listen(port);