//import mongoose
const mongooes = require('mongoose');

//create a schema for the registration. this defines the strucute of the data
const RegistrationSchema = new mongooes.Schema({
    name: String, //name of type string
    email: String, //email of type string
    password: String //password of type string
});

//create a model based on the schema
//the model holds the data from the database and allows it to be interacted with
//name of the collection is Registration
const RegistrationModel = mongooes.model('Registration', RegistrationSchema);

//the model is exported to be used in other files
module.exports = RegistrationModel;