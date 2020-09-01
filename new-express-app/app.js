const express = require("express");
const authRoutes = require("./routes/auth-routes.js");
const profileRoutes = require("./routes/profile-routes")
const passportStrategy = require("./config/passport-setup");
const mongoose = require("mongoose");
const keys = require("./keys");
const cookieSession = require("cookie-session");
const port = 3000;
const app = express();
const passport = require("passport");

app.use(express.static(__dirname + "/public"));

app.use(
  cookieSession({
    name: "session",
    //      d    h    min   sec
    maxAge: 24 * 60 * 60 * 1000,
    keys: keys.COOKIE_KEY,
  })
);

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(keys.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set("view engine", "hbs");

app.get("/hello", (req, res) => {
  res.render("hello", {
    title: "superfly",
  });
});

app.use("/auth", authRoutes);
app.use('/profile', profileRoutes);

app.listen(port);
