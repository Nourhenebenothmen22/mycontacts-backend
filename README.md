# 📇 MyContacts Backend API

Une API RESTful construite avec Node.js, Express et MongoDB pour gérer des contacts avec authentification utilisateur.

---

## 🔧 Stack technique

- **Backend** : Node.js, Express.js
- **Base de données** : MongoDB + Mongoose
- **Sécurité** : JWT, bcryptjs, helmet, express-validator
- **Middleware** : express-async-handler, multer
- **Autres** : dotenv, cors, nodemon

---

## 🚀 Fonctionnalités

- 🔐 Inscription et connexion des utilisateurs
- 🧾 Authentification via JWT
- 📬 CRUD complet pour les contacts
- 🗂️ Upload d'image (via multer, stockage local)
- 🧼 Sécurisation des inputs (mongo-sanitize, xss-clean)
- ✅ Validation des données (express-validator)

---

## 📁 Structure des dossiers

mycontacts-backend/
│
├── config/ # Connexion à MongoDB
├── controllers/ # Logique métier (auth & contacts)
├── middleware/ # Middlewares (auth, multer, validation)
├── models/ # Schémas Mongoose (User, Contact)
├── routes/ # Routes Express (auth, contacts)
├── uploads/ # Dossier pour images uploadées
├── .env # Variables d'environnement
├── server.js # Point d'entrée de l'application
└── README.md # Documentation

---

## 📦 Installation

1. **Cloner le projet**

```bash
git clone https://github.com/ton-utilisateur/mycontacts-backend.git

🛠️ Endpoints principaux
🔐 Authentification
| Méthode | URL                 | Description             |
| ------- | ------------------- | ----------------------- |
| POST    | /api/users/register | Inscription utilisateur |
| POST    | /api/users/login    | Connexion utilisateur   |

📇 Contacts
| Méthode | URL                | Description                  |
| ------- | ------------------ | ---------------------------- |
| GET     | /api/contacts      | Obtenir tous les contacts    |
| POST    | /api/contacts      | Ajouter un nouveau contact   |
| GET     | /api/contacts/\:id | Obtenir un contact par ID    |
| PUT     | /api/contacts/\:id | Modifier un contact existant |
| DELETE  | /api/contacts/\:id | Supprimer un contact         |

👤 Auteur
Nourhene Ben Othmen

MERN Stack Developer

GitHub: https://github.com/Nourhenebenothmen22
Email :benothmennourhen8@gmail.com



