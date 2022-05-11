import mongoose from "mongoose";
var Schema = mongoose.Schema;

var user = new Schema({
  name: {
    type: String,
    required: true,
    trim:true
  },
  password: {
    type: String,
    required: true,
    trim:true
  },
  token: {
    type: String,
    required: true,
    trim:true
  },
});

mongoose.models = {};

var User = mongoose.model("User", user);

export default User;