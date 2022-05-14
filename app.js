//express 基本設定
var express = require('express')
var app = express();


app.get('/',function(req,res){
    res.send('簡易GET範例')
})



//監聽 port
var port = process.env.PORT || 3005;
app.listen(port);