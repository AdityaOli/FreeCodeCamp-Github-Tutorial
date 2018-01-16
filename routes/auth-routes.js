const router = require('express').Router();
const passport = require("passport");


//auth login
router.get("/login",(request, response) =>
{
    response.render("login", {user: request.user});
});

//auth logout
router.get("/logout",(request, response) =>
{
   request.logout();
   response.redirect("/");
});

//auth with github
router.get("/github", passport.authenticate("github",{
  scope:["profile","repo"]
}));

//calback
router.get("/github/redirect", passport.authenticate("github"),(request, response) =>
{
    //response.send(request.user);
    console.log("Redirected!!");
    response.redirect("/profile/");
});


module.exports = router;
