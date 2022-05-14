const Post = require("../models/Post");


const CreatePosts = async(req,res)=>{
    console.log("create post",req.body);
    const {title,description,email} = req.body
    try{
    const posted = await Post.create({
        Email:email,
        Title:title,
        Description:description,
        likes:0
    })
    return res.status(200).json(posted)
}
catch(error){
    return res.status(501).json(error)
}
}

module.exports = CreatePosts