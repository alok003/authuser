const express=require('express');
const app=express();
const port=8000;
const bodyParser=require('body-parser')
const db = require('./config/mongoose');
const cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use('/',require('./routes'));

app.set('view engine','ejs');
app.set('views','./views');


app.listen(port,function(err){
    if(err){console.log(`error connecting to server:${err}`);}
    console.log(`server is running on port:${port}`);
});


