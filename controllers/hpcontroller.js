const Posts = require('../models/posts');
const User = require('../models/user.js');
const Comment = require('../models/comment');

module.exports.home = async function(req,res){
    // return res.end('<h1>hello</h1>');
    //not populated only gives userid
    // const post = await Posts.find({});
    // return res.render('home',{post:post});


    try{
        const posts = await Posts.find({}).populate('user').populate({path:'comment',populate:{path:'user'}}).exec();
        return res.render('home',{post:posts});
    }catch(err){
        console.log('error finding user',err);
        // res.redirect('/');
    }


}