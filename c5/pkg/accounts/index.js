const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
    email: String,
    password: String,
    fullname: String
});

const Account = mongoose("accounts", accountSchema);

//Task:
//try to finish these CRUD functions for database operations in MongoDB