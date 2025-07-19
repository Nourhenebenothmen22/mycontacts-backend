const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const validateToken = asyncHandler(async (req, res, next) => {
  let token;

  // Vérifie l'existence du header Authorization
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith('Bearer')) {
    try {
      // Extraction du token
      token = authHeader.split(' ')[1];

      // Vérification et décodage
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Ajout de l'utilisateur à la requête (sans mot de passe)
      req.user = await User.findById(decoded.id).select('-password');

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Not authorized, token invalid');
    }
  } else {
    res.status(401);
    throw new Error('Not authorized, token missing');
  }
});

module.exports = validateToken;
