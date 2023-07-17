const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const UserSchema = new Schema({
   id:{
       type: mongoose.Schema.Types.ObjectId,
   },
  name: String,
  username: String,
  email: String,
  address: {
    street: String,
    suite: String,
    city: String,
    zipcode: String,
    geo: {
      lat: String,
      lng: String,
    },
  },
  phone: String,
  website: String,
  company: {
    name: String,
    catchPhrase: String,
    bs: String,
  },
  posts: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Posts"
  }
});
module.exports = Users = mongoose.model("Users", UserSchema);
