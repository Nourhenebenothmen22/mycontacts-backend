const express = require("express");
const dotenv = require('dotenv');
const errorHandler = require("./middleware/errorHandler");
const connectdb = require("./config/db");

dotenv.config();
connectdb();

const app = express();

app.use(express.json()); // <=== Important !

app.use("/api/contacts", require('./routes/contactRoutes'));
app.use("/api/users", require('./routes/userRoute'));

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on PORT: ${PORT}`);
});
