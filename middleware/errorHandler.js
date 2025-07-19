const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode || 500;

  let message;
  switch (statusCode) {
    case 200:
      message = "Requête réussie.";
      break;
    case 201:
      message = "Ressource créée avec succès.";
      break;
    case 400:
      message = "Requête invalide.";
      break;
    case 404:
      message = "Ressource non trouvée.";
      break;
    case 500:
    default:
      message = "Erreur interne du serveur.";
      break;
  }

  res.status(statusCode).json({
    success: false,
    message,
    error: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  });
};

module.exports = errorHandler;
