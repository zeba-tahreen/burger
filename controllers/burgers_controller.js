
// Inside the burgers_controller.js file, import the following:

// Express
// burger.js
//Create the router for the app, and export the router at the end of your file.
var express = require('express');
var burger = require('../models/burger.js');
var router = express.Router();

////////////////////////////////////////////////

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      title: "Burger App",
      burgers: data
    };
    console.log(hbsObject);
    res.render("home", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
    // Send back the ID of the new quote
    // res.json({ id: result.insertId });
    res.redirect("/")
  });
});

router.post("/api/burger/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update(
    {
      devoured: req.body.devoured
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      // res.status(200).end();
      res.redirect("/")
    }
  );
});

// Export routes for server.js to use.
module.exports = router;
