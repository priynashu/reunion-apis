const Post = require("../models/Post");

const Str = require('@supercharge/strings')





const Comment = async(req, res) => {
    
    // console.log("like", req.body, req.params);
    try{
    const {id} = req.params
    const {comment} = req.body
    const currentUser = await Post.findOne({_id:id})
    let comments = currentUser.Comments
    console.log("comments are first",comments);
    let commentObject = {
        _id:Str.random(16)  ,
        comment:comment
    }
    comments.push(commentObject)

    console.log("comments are",comments);
    const Cuser = await Post.findOneAndUpdate({
        _id: id
    }, {Comments:comments})
    // console.log("user",Fuser);
    return res
        .status(200)
        .json(Cuser)
    }
    catch(error){
        return res
        .status(500)
        .json(error)
    }
}

module.exports =  Comment