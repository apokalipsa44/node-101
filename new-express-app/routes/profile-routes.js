const router = require("express").Router();

const authCheck = (req, res, next) => {
  if (!req.user) {
    //   console.log(res);
      console.log('user not logged in');
    // res.redirect("/login");
    next();
  } else {
    next();
  }
};

router.get("/", (req, res) => {
    res.send('from profile router');
});

module.exports =router;


