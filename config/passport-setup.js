var passport = require("passport");
var GitHubStrategy = require("passport-github");
const User = require("../models/user-models.js");
require('dotenv').config();


passport.serializeUser((user, done) => {
  done(null, user.id);
});


passport.deserializeUser((id, done) => {
  User.findById(id).then((user)=>{
    done(null, user);
  });
});


passport.use(new GitHubStrategy(
  {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/redirect"
  },
  function(accessToken, refreshToken, profile, done)
  {
      console.log(profile);
    //Check if user already exists in the database
    User.findOne({githubId: profile.id}).then((currentUser) =>
    {
      if(currentUser)
      {
        //User already Exists
        console.log("Welcome Back : "+currentUser.userName);
        done(null, currentUser);
      }
      else
      {
        //User does not exist in our db. Create
        new User(
        {
          userName: profile.displayName,
          githubId: profile.id
        })
        .save()
        .then((newUser) =>
        {
          console.log("Successfully created user : "+newUser);
          done(null, currentUser);
        });
      }
    });
  }
));
