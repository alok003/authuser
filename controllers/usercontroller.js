const User = require('../models/user.js');

module.exports.sign_up = function(req,res){
    //for loccal auth 
    // if(req.cookies.userid){
    //     return res.render('profile')
    // }
    // return res.render('sign_up');
    //for passport auth
    if(req.isAuthenticated()){
        return res.redirect('/users/profile')
    }
    res.render('sign_up');
}
module.exports.sign_in = function(req,res){
    //for local auth
    // if(req.cookies.userid){
    //     return res.render('profile')
    // }
    // return res.render('sign_in');
    //for passport
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('sign_in');
}
//for local auth 
// module.exports.profile = async function(req,res){
//     if(req.cookies.userid){
//         const user= await User.findOne({_id:req.cookies.userid});
//         return res.render('profile',{
//             'user':user
//         })
//     }
//     return res.redirect('back');
// }
//for passport auth
module.exports.profile = function(req,res){
    return res.render('profile');
}
module.exports.create = async function(req,res){
    if(req.body.password!=req.body.cnfpassword){
        return res.redirect('back');}
    const user= await User.findOne({email:req.body.email});
    if(!user){
        const cuser=await User.create(req.body);
    }
    return res.redirect('/users/sign-in');

}
//for local auth 
// module.exports.createSession = async function(req,res){
//     const user= await User.findOne({email:req.body.email});

//     if(user.password!=req.body.password){
//         res.redirect('/users/sign-up');
//     }
//     if(user.password==req.body.password){
//         res.cookie('userid',user.id);
//         res.redirect('/users/profile');
//     }
// }
//for passport auth
module.exports.createSession = function(req,res){
    return res.redirect('/');
}
//for local auth 
// module.exports.signOut = function(req,res){
//     if(req.cookies.userid){
//         res.clearCookie('userid');
//         return res.render('sign_in')
//     }
//     return res.redirect('back');

// }
//for passport auth 
module.exports.signOut = function(req,res){
    req.logout(function(err){
        if(err){
            console.log('error logging out');
        }
        else{
            return res.redirect('/');
        }
    });
    // return res.redirect('/');
}
