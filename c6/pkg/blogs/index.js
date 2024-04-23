const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    //_id vi e auto generirano pri kreiranje nov zapis
    title: String,
    content: String,
    account_id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "accounts"
    },
})

const Blog = mongoose.model("blogs", blogSchema, "BLOGS");

//Task:
// Make the 5 crud functions for this model