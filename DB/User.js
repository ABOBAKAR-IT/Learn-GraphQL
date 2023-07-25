import mongoose from "mongoose"

const Schema = mongoose.Schema;
const UserSchema = new Schema({

  name: String,
  username: String,
  email: String,
  street: String,
  city: String,
  phone: String,
  website: String,
  post:[{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Posts"
  }]
});

const Users = mongoose.model("Users", UserSchema);
export default Users