const Post = require("../models/Post");




const like = async(req, res) => {
    
    // console.log("like", req.body, req.params);
    const {id} = req.params
    const currentUser = await Post.findOne({_id:id})
    const likes = currentUser.likes
    // console.log("likes are",currentUser);
    
    const Cuser = await Post.findOneAndUpdate({
        _id: id
    }, {likes:likes+1})
    // console.log("user",Fuser);
    return res
        .status(200)
        .json(Cuser)
}
const unlike = async(req, res) => {
    console.log("unlike", req.body, req.params);
    const {id} = req.params
    const currentUser = await Post.findOne({_id:id})
    const likes = currentUser.likes
    // console.log("likes are",currentUser);
    if(likes<=0)
    {
        return res
        .status(404)
        .json("cannot be reduced already 0")    
    }
    const Cuser = await Post.findOneAndUpdate({
        _id: id
    }, {likes:likes-1})
    // console.log("user",Fuser);
    return res
        .status(200)
        .json(Cuser)
}
module.exports = {
    like: like,
    unlike: unlike
};