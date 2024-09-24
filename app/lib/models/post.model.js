import mongoose from "mongoose";


const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
      },
      description: {
        type: String,
        required: true
      },
      category:{
        type:String,
        required:true
      },
      author: {
        type: String,
        required: true,
        trim: true
      },
      tags: [{
        type: String,
        trim: true
      }],
      image:{
        type:String,
      },
      createdAt: {
        type: Date,
        default: Date.now
      },
      updatedAt: {
        type: Date,
        default: Date.now
      },
});



export const Post = mongoose.models.Post || mongoose.model('Post',PostSchema);

