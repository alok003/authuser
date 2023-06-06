const Posts = require('../models/posts');

module.exports.createpost = async function(req,res){
    if(req.isAuthenticated()){
        const post = await Posts.create({
            content:req.body.postD,
            user:req.user._id
        })
        return res.redirect('/')
    }
    
}