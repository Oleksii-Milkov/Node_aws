const express = require('express'),
    app = express();

app.set("view engine", "pug");

app.get("/", function(req, res){
    res.render("index", { title : "Home page"});
});

app.listen(8080, function () {
    console.log("App at http://localhost:8080");
});