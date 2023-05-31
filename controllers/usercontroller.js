const User = require('../models/user.js');

module.exports.sign_up = function(req,res){
    if(req.cookies.userid){
        return res.render('profile')
    }
    return res.render('sign_up');
}
module.exports.sign_in = function(req,res){
    if(req.cookies.userid){
        return res.render('profile')
    }
    return res.render('sign_in');
}
module.exports.profile = async function(req,res){
    if(req.cookies.userid){
        const user= await User.findOne({_id:req.cookies.userid});
        return res.render('profile',{
            'user':user
        })
    }
    return res.redirect('back');
}
module.exports.signOut = function(req,res){
    if(req.cookies.userid){
        res.clearCookie('userid');
        return res.render('sign_in')
    }
    return res.redirect('back');

}
module.exports.create = async function(req,res){
    if(req.body.password!=req.body.cnfpassword){
        return res.redirect('back');}
    const user= await User.findOne({email:req.body.email});
    if(!user){
        const cuser=await User.create(req.body);
    }
    res.redirect('/users/sign-in');

}
module.exports.createSession = async function(req,res){
    const user= await User.findOne({email:req.body.email});

    if(user.password!=req.body.password){
        res.redirect('/users/sign-up');
    }
    if(user.password==req.body.password){
        res.cookie('userid',user.id);
        res.redirect('/users/profile');
    }
}
