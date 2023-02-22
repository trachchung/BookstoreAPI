import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    year:{
        type:Number,
    },
    books:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Book"
    }]
})

const bookSchema = new mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    publishedDate:{
        type:String,
    },
    genres:{
        type:[String],
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Author"
    }
})

let Book = mongoose.model("Book", bookSchema);
let Author = mongoose.model("Author", authorSchema);

module.exports = {Book, Author};