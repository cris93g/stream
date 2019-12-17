require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const routes = require("./routes/routes.js");
const session = require("express-session");
const app = express();
const port = process.env.port || 3001;

app.use(cors());
app.use(json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

app.use((req, res, next) => {
  if (!req.session.user) req.session.user = [];
  next();
});
routes(app);

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
