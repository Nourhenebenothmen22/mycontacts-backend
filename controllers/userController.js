const asyncHandler = require('express-async-handler'); 
const User = require('../models/userModel'); 
const bcrypt = require('bcrypt');

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error('All fields (username, email, password) are required');
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(400);
    throw new Error('User already exists with this email');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({ message: 'User registered successfully' });
  } else {
    res.status(400);
    throw new Error('Failed to register user');
  }
});

const loginUser = asyncHandler(async (req, res) => {
    res.json({ message: 'User logged in successfully' });
});

const currentUser = asyncHandler(async (req, res) => {
    res.json({ message:'User current data retrieved successfully' });
});
module.exports = { registerUser, loginUser,currentUser };
