<<<<<<< HEAD
// Dependencies
var express = require("express");
var path = require("path");

// Set up express app
var app = express();
var PORT = process.env.PORT || 3000;

// set up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [
    {
        name: "Susie EarlyBird",
        phoneNumber: "8675-389",
        email: "susie@gmail.com",
        partySize: "5",
        status: ""
    }
];

var counter = 1;

if (counter <= 5) {
    for (var i = 0; i < tables.length; i++) {
        tables[i].status == "seated";
    }
    counter++;
}
else {
    for (var i = 5; i < tables.length; i++) {
        tables[i].status == "waiting";
    }
    counter++;
}






// Routes

// home page route
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});


// show all tables
app.get("/api/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "all.html"));
});



// add a new reservation
app.get("/api/add", function (req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
    console.log(tables);
});

// start server

app.listen(PORT, function () {
    console.log("Server is running");
})
=======
// dependencies

var express = require("express");
var path = require("path");

// setup express app
var app = express();
var PORT = process.env.PORT || 3000;

//set up express app to handle data parsing

app.use(express.urlencoded({extended:true}));
app.use(express.json());

var reservations = [
    {
        name: "susie earlybird",
        phoneNumber: "8675-309",
        email: "susie@gmail.com",
        partySize: "5"
    }
]

var waitingList = [
    {
        name: "jared nielson",
        phoneNumer: "555-555-5551",
        email: "jared@jared.com",
        partySize: "1"
    }
]

// setup routes

// homepage route

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

// api tables

// start server
app.listen(PORT, function() {
    console.log("Server is running");
})
>>>>>>> 5b130b88b5d3baf27cfca412326239a1c1cb2e1c
