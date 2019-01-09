// dependencies

var express = require("express");
var path = require("path");

// setup express app
var app = express();
var PORT = process.env.PORT || 3000;

//set up express app to handle data parsing

app.use(express.urlencoded({extended:true}));
app.use(express.json());

var tables = [
    {
        name: "susie earlybird",
        phoneNumber: "8675-309",
        email: "susie@gmail.com",
        partySize: "5",
        status: ""
    }
]

var counter = 1;

if (counter <= 5) {
    for (var i = 0; i < tables.length; i++) {
        tables[i].status == "seated";
    }
    counter++;
} else {
    for (var i = 5; i < tables.length; i++) {
        tables[i].status == "waiting";   
    }
    counter++;
}

console.log(tables);

// setup routes

// homepage route
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

// show adding reservations page
app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"))
});

// show all (tables) page
app.get("/all", function(req, res) {
    res.sendFile(path.join(__dirname, "all.html"))
});

// show JSON object page for all (tables)
app.get("/api/all", function(req, res) {
    res.json(tables);
});

// start server
app.listen(PORT, function() {
    console.log("Server is running");
})
