const express = require("express");
const app = express();
const authRoutes = require("./routes/auth-routes.js");
const profileRoutes = require("./routes/profile-routes.js");
const passportSetup = require("./config/passport-setup.js");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
bodyParser.urlencoded({ extended: true });
require("dotenv").config();
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

//cookieEnablement
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_ENCRYPTION_KEY]
  })
);

app.use(passport.initialize());
app.use(passport.session());

//setup port
app.listen(8000, () => {
  console.log("Application is now listening on port 8000!");
});

//Use routing
app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);

//simple route for the homepage
app.get("/", (request, response) => {
  response.render("index", { user: request.user });
});

//mongodb-mLab connection
mongoose.connect(process.env.MONGO_DB_URL, { useMongoClient: true }, () => {
  console.log("Connected to mLab/MongoDB!");
});
