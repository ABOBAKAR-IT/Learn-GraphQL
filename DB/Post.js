const mongoose = require("mongoose");

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
module.exports = Posts = mongoose.model("Posts", PostSchema);




