const router = require("express").Router();

const authCheck = (request, response, next) => {
  if (!request.user) {
    response.redirect("/auth/login");
  } else {
    next();
  }
};

router.get("/", authCheck, (request, response) => {
  response.render("profile", { user: request.user });
});

router.get("/console", authCheck, (request, response) => {
  response.render("console", { user: request.user });
});

router.get("/roadMap", authCheck, (request, response)=>
{
    var roadMap = require("./../public/scripts/roadMap.js");
    response.setHeader("Content-Type", "application/json");
    response.send(JSON.stringify(roadMap, null, 3));
});

module.exports = router;
