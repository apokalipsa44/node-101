const express = require("express");
const authRoutes = require("./routes/auth-routes.js");
const passportStrategy = require('./config/passport-setup')

const port = 3000;
const app = express();



app.use(express.static(__dirname + "/public"));

app.set("view engine", "hbs");

app.get("/hello", (req, res) => {
  res.render("hello", {
    title: "superfly",
  });
});

app.use("/auth", authRoutes);

app.listen(port);
