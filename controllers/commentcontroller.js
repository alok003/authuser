const Posts = require('../models/posts');
const Comments = require('../models/comment');

module.exports.createcomment = async function(req,res){
    const post = await Posts.findById(req.body.postid);
    if(post){
        const comment = await Comments.create({
        content:req.body.comment,
        user:req.user._id,
        post:req.body.postid
        })
            post.comment.push(comment);
            post.save();
    }
        return res.redirect('/');    
}