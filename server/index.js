//The back end was created with the help of a youtube guide. found below:
//https://www.youtube.com/watch?v=ZVyIIyZJutM&t=91s&ab_channel=CodeWithYousaf


// modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const RegistrationModel = require('./models/Registrations');

//initializing express
const app = express();

//middleware for parsing json data
app.use(express.json())

//enable CORS for cross origin request
app.use(cors());

//connecting to mongodb database
mongoose.connect("mongodb://127.0.0.1:27017/Registration");

//handling POST request for logging in
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    RegistrationModel.findOne({ email: email}) //search for user with email
    .then(user => {
        if (user) { //if the user is found
            if (user.password === password) {//and password matches
                res.json("Success");//if matches, send success
            } else {
                res.json("Incorect password or email");//if password does not match, send incorrect password or email
            }
        } else {
            res.json("User not found");// else the user is not found
        }

    })
});

//handling POST request for registering
app.post("/register", (req, res) => {
    RegistrationModel.create(req.body)
    .then(registrations => res.json(registrations))
    .catch (err => res.json(err));

});

//starting the server
app.listen(3001, () => {
    console.log("Server is running on port 3001");
});