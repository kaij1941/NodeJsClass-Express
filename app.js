//express 基本設定
var express = require('express')
var app = express();


app.get('/',function(req,res){
    res.send('簡易GET範例')
})


app.get('/user',function(req,res){
    res.send('網址/user的路由')
})
//動態路由
app.get('/user/:name/:Code',function(req,res){
    res.send('網址/user的路由,且傳參數name為"'+req.params.name+'",Code為"'+req.params.Code+'"')
    //傳遞結果(當路由為/user/TestName/00123)=>   網址/user的路由,且傳參數name為"TestName",Code為"00123"
})

//監聽 port
var port = process.env.PORT || 3005;
app.listen(port);