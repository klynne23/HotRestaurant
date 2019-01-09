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
