const mongoose = require("mongoose");
const url = 'mongodb://127.0.0.1:27017/contact-api';

const connectdb = async () => {
  try {
    await mongoose.connect(url);
    console.log('✅ Connexion à MongoDB réussie !');
  } catch (error) {
    console.error('❌ Échec de la connexion à MongoDB :', error);
    process.exit(1); // Arrête l’application si échec
  }
};

module.exports = connectdb;
