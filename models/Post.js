const mongoose = require('mongoose');

const PostSchema = mongoose.Schema(
  {
    Email:{type:String,required:true},
    Title:{type:String,required:true},
    Description: { type: String, required: true },
    Comments: { type: [Object], required: false },      
    likes:{type:Number,required:false}
  },
  {
    timestamps: true,
  },
);

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
