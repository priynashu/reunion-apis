const Post = require("../models/Post");


const DeletePosts = async(req,res)=>{
    console.log("delete post",req.params);
    const {id} = req.params
    try{
    const posted = await Post.deleteOne({_id:id})
    return res.status(200).json(posted)
}
catch(error){
    return res.status(500).json(error)
}
}

module.exports = DeletePosts