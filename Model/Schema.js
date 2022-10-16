import mongoose from 'mongoose';
const { Schema } = mongoose;

const Myschema = new Schema({
  Username:  String, 
  }

);
var userModel = mongoose.model('User', Myschema);
module.exports = userModel;