const asyncHandler = require('express-async-handler'); 

const registerUser = asyncHandler(async (req, res) => {
    res.json({ message: 'User registered successfully' });
});

const loginUser = asyncHandler(async (req, res) => {
    res.json({ message: 'User logged in successfully' });
});

const currentUser = asyncHandler(async (req, res) => {
    res.json({ message:'User current data retrieved successfully' });
});
module.exports = { registerUser, loginUser,currentUser };
