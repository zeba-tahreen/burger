var express = require("express");
var app = express();
var PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exhbs = require('express-handlebars');
app.engine("handlebars", exhbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var routes = require('./controllers/burgers_controller');
app.use(routes);
// var data = {
//     title: "My Page",
//     hobbies: ["Eating", "Sleeping", "Boxing", "Coding"]
// }

// app.get("/", function(req, res){
//     res.render("home", data)
// })

// app.post("/api/addHobby", function(req, res){
//     console.log(req.body)
//     data.hobbies.push(req.body.hobby);
//     res.render("home", data)
// })

// app.post("/api/delete", function(req, res){
//     console.log(req.body)
//     let index = 0;
//     for(var i = 0; i < data.hobbies.length; i++){
//         if(data.hobbies[i] === req.body.hobby){
//             index = i;
//         }
//     }
//     data.hobbies.splice(index, 1)
//     res.render("home", data)
// })
// app.get("/api/delete/:hobby", function(req, res){
//     let index = 0;
//     for(var i = 0; i < data.hobbies.length; i++){
//         if(data.hobbies[i] === req.params.hobby){
//             index = i;
//         }
//     }
//     data.hobbies.splice(index, 1)
//     res.render("home", data)
// })

app.listen(PORT, function(){
    console.log("Listening on PORT: " + PORT);
})