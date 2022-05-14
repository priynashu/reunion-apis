const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
  {
    Name:{type:String,required:true},
    Email: { type: String, required: true },
    Password: { type: String, required: true },  
    follow:{type:[Object],required:false},
    followers:{type:Number,required:false},
    following:{type:Number,required:false}
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model('User', UserSchema);

module.exports = User;
