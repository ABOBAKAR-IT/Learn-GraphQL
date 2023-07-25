import mongoose from "mongoose"

const Schema = mongoose.Schema;
const PostSchema = new Schema({
   id:{
       type: mongoose.Schema.Types.ObjectId,
   },
   userId: {
    type: mongoose.Schema.Types.ObjectId,
     ref:"Users"
   },
   title: String,
   body: String
});
 const Posts = mongoose.model("Posts", PostSchema);
 export default Posts