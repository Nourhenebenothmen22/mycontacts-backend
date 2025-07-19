const Contact = require('../models/contact');

// 🔍 Obtenir tous les contacts
const getContact = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    next(error); // ⛔ Transmet l'erreur au middleware global
  }
};

// 🔍 Obtenir un contact par ID
const getContactById = async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("Contact non trouvé");
    }
    res.status(200).json(contact);
  } catch (error) {
    next(error);
  }
};

// 🗑️ Supprimer un contact
const deleteContact = async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("Contact non trouvé");
    }
    res.status(200).json({ message: "Contact supprimé avec succès", contact });
  } catch (error) {
    next(error);
  }
};

// 🆕 Créer un nouveau contact
const createContact = async (req, res, next) => {
  try {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
      res.status(400);
      throw new Error("Tous les champs sont requis (name, email, phone).");
    }

    const newContact = new Contact({ name, email, phone });
    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (error) {
    next(error);
  }
};

// ♻️ Mettre à jour un contact
const updateContact = async (req, res, next) => {
  try {
    const { name, email, phone } = req.body;
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      { name, email, phone },
      { new: true, runValidators: true }
    );

    if (!updatedContact) {
      res.status(404);
      throw new Error("Contact non trouvé");
    }

    res.status(200).json(updatedContact);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getContact,
  getContactById,
  createContact,
  updateContact,
  deleteContact
};
