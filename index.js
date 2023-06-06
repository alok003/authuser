const express=require('express');
const app=express();
const port=8000;
const bodyParser=require('body-parser')
const db = require('./config/mongoose');
const cookieParser = require('cookie-parser');

const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo')(session);
// const MongoStore = require('connect-mongo');

app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());




app.use(session({
    name: 'codeial',
    // TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: new MongoStore(
        {
            mongooseConnection: db,
            autoRemove: 'disabled'
        
        },
        function(err){
            console.log(err ||  'connect-mongodb setup ok');
        }
    )
    // store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING })
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);









app.use('/',require('./routes'));

app.set('view engine','ejs');
app.set('views','./views');


app.listen(port,function(err){
    if(err){console.log(`error connecting to server:${err}`);}
    console.log(`server is running on port:${port}`);
});


