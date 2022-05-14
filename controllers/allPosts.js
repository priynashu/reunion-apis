const Post = require("../models/Post");


const AllPosts = async(req,res)=>{
    // console.log("get single post",req.params);
    // const {id} = req.params
    try{
    const allPost = await Post.find()
    return res.status(200).json(allPost)
}
catch(error){
    return res.status(500).json(error)
}
}

module.exports = AllPosts