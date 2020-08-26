const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require(".../keys");
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.GOOGLE_CLIENT_ID,
      clientSecret: keys.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback",
    },
    () => {}
  )
);
