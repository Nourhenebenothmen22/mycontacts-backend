const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: [true, 'Username already exists'],
  },
  email:{
    type: String,
    required: [true, 'Email is required'],
    unique: [true, 'Email already exists'],
  },
  password:{
    type: String,
    required: [true, 'Password is required'],
  }
},{timestamps:true});

module.exports = mongoose.model('User', userSchema);
