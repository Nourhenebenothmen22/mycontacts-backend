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
  

📁 Structure des dossiers

| Dossier/Fichier | Description                                       |
| --------------- | ------------------------------------------------- |
| `config/`       | Connexion à MongoDB                               |
| `controllers/`  | Logique métier (authentification & contacts)      |
| `middleware/`   | Middlewares (auth, multer, validation, etc.)      |
| `models/`       | Schémas Mongoose pour les entités (User, Contact) |
| `routes/`       | Routes Express (utilisateurs, contacts)           |
| `uploads/`      | Dossier de stockage pour les fichiers uploadés    |
| `.env`          | Variables d’environnement (port, DB, JWT, etc.)   |
| `server.js`     | Point d’entrée principal de l’application         |
| `README.md`     | Documentation du projet                           |


---



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



