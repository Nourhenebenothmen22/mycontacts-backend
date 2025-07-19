const { body, validationResult } = require('express-validator');

// ✅ Règles de validation
const contactValidationRules = [
  body('name')
    .notEmpty().withMessage('Le nom est requis'),

  body('email')
    .isEmail().withMessage('Adresse email invalide'),

  body('phone')
    .notEmpty().withMessage('Le numéro de téléphone est requis')
    .isMobilePhone().withMessage('Numéro de téléphone invalide')
];

// ✅ Middleware pour gérer les erreurs
const validateContact = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  contactValidationRules,
  validateContact
};
