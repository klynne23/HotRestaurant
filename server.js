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