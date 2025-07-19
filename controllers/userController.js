const asyncHandler = require('express-async-handler'); 
const User = require('../models/userModel'); 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // ✅ Corrigé ici

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
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error('Email and password are required');
  }

  const user = await User.findOne({ email });

  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });

    return res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token
    });
  } else {
    res.status(401); // Unauthorized
    throw new Error('Invalid email or password');
  }
});

const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: 'User current data retrieved successfully' });
});

module.exports = { registerUser, loginUser, currentUser };
