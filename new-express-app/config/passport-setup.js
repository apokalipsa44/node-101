const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("../keys");
const User = require("../models/user");

passport.serializeUser((user, done) => {
  // sends user id to a cookie (mong DB id)
  console.log('from serializeUser'+user);
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  //gets user id from cookie (mong DB id)
  User.findById(id).then((user) => {
    console.log('from deserializeUser: '+user);
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.GOOGLE_CLIENT_ID,
      clientSecret: keys.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    //passport callback function
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        console.log("user already in db" +existingUser);
        return done(null, existingUser);
      }

      const user = new User({
        username: profile.displayName,
        googleId: profile.id,
      });

      await user.save().then(() => {
        console.log("user saved");
      });
      done(null, user);
    }
  )
);
