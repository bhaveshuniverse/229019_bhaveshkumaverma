var express=require('express');
var app=express();

var path=require('path');

app.use(express.static(path.join(__dirname,'public')));

app.get('/',function(req,res){
    res.sendFile(path.join(__filename+'/index.html'))
})
app.listen(8080);
console.log("started successfully");