const Post = require("../models/Post");


const GetSinglePosts = async(req,res)=>{
    console.log("get single post",req.params);
    const {id} = req.params
    try{
    const getPost = await Post.findOne({_id:id})
    return res.status(200).json(getPost)
}
catch(error){
    return res.status(500).json(error)
}
}

module.exports = GetSinglePosts