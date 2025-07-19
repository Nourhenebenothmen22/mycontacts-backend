const express = require('express');
const router = express.Router();

const {
  getContact,
  getContactById,
  createContact,
  updateContact,
  deleteContact
} = require('../controllers/contactController');

const {
  contactValidationRules,
  validateContact
} = require('../middleware/validateContact');

// Routes
router.get('/', getContact);
router.get('/:id', getContactById);

router.post(
  '/',
  contactValidationRules,
  validateContact,
  createContact
);

router.put(
  '/:id',
  contactValidationRules,
  validateContact,
  updateContact
);

router.delete('/:id', deleteContact);

module.exports = router;
