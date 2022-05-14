const User = require("../models/User");



const follow = async(req,res)=>{
console.log("follow",req.body,req.params);
const {id} = req.params
const {email} = req.body
// const followUser = await User.findById({_id:id})
// followUser.follow.push({email:req.body.email})// here I am finding the user 
                                              // which will be followed and adding a follower to its list
// Use above code If there are more users
const Fuser= await User.findOneAndUpdate({_id:id},{follow:[{email:email,follow_unfollow:true}]})
// console.log("user",Fuser);
return res.status(200).json(Fuser)
}
const unfollow = async(req,res)=>{
  console.log("unfollow",req.body,req.params);
  const {id} = req.params
  const {email} = req.body
  const Fuser= await User.findOneAndUpdate({_id:id},{follow:[{email:email,follow_unfollow:false}]})
return res.status(200).json(Fuser);
}
module.exports = {
    follow: follow,
    unfollow: unfollow,
    
  };