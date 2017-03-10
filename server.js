/**
 * Created by gemis on 3/9/17.
 */
var express = require('express');
var app = express();


app.use('/public',express.static(`${__dirname}/lib`));

app.get('/',function(req,res){
    res.sendFile(`${__dirname}/public/index.html`);
})

app.listen(8080,function(){
    console.log("Running")
})