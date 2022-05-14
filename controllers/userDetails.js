const User = require("../models/User");


const UserDetails = async(req,res)=>{
    
    const {userEmail} =  req.params
    console.log("get details email",userEmail);
    const user = await User.findOne({Email:userEmail})
    console.log("user details",user);
    res.status(200).json(user)

}
module.exports = UserDetails