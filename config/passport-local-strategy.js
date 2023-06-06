const passport = require('passport');

const localStrategy = require('passport-local').Strategy;

const User = require('../models/user');


passport.use(new localStrategy({
    usernameField: 'email'
    },
    async function(email,password,done){
        try{
            const user = await User.findOne({email:email})
            if(!user||user.password!=password){
                console.log('invalid credentials ');
                return done(null,false);
            }
            return done(null,user);
        }
        catch{
            if(err){
                console.log('error in finding user in passport based auth');
                return done(err);
            }
        }
        // User.findOne({email:email},function(err,user){
        //     if(err){
        //         console.log('error in finding user in passport based auth');
        //         return done(err);
        //     }

        //     if(!user||user.password!=password){
        //         console.log('invalid credentials ');
        //         return done(null,false);
        //     }
        //     return done(null,user);
        // })
    }

));

passport.serializeUser(function(user,done){
    done(null,user.id);
});

passport.deserializeUser(async function(id,done){
    try{
        const user = await User.findById(id)
        return done(null,user);
    }
    catch{
        if(err){
            console.log('error in finding the user passport');
            return done(err);
        }
    }

    // User.findById(id,function(err,user){
    //     if(err){
    //         console.log('error in finding the user passport');
    //         return done(err);
    //     }
    //     return done(null,user);
    // });
});




passport.checkAuthentication = function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/users/sign-in');
}


passport.setAuthenticatedUser = function(req,res,next){
    if(req.isAuthenticated()){
        res.locals.user = req.user;
    }
    next();
}



module.exports = passport;

