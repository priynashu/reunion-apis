const User = require('../models/User');
const jwt = require('jsonwebtoken')
const Login = async (req, res) => {

        console.log("inside login",req.body);
        const {email,password}=req.body
        try {            
            // const _id=req.body._id
            const existingUser = await User.findOne({ Email:email });
            console.log("existingUser:",existingUser);
            if(existingUser){
                console.log("user Already exists");
                return res.status(404).json({ message: 'User already exists' });
            }
            const user = await User.create({
                Email:req.body.email,
                Password:req.body.password,
                Name:req.body.name,
                followers:10,
                following:20
            })
            const userId=user._id
            const token = jwt.sign({email:req.body.email,token:userId},process.env.secret_key,{
                expiresIn:'1d'
            })
            return res.status(200).json({ user: user, token: token });
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Something went wrong' });
        }
 
        
    

    
}

module.exports = Login; 