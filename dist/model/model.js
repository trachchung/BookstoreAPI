"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const authorSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    year: {
        type: Number,
    },
    books: [{
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Book"
        }]
});
const bookSchema = new mongoose_1.default.Schema({
    name: {
        required: true,
        type: String
    },
    publishedDate: {
        type: String,
    },
    genres: {
        type: [String],
    },
    author: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Author"
    }
});
let Book = mongoose_1.default.model("Book", bookSchema);
let Author = mongoose_1.default.model("Author", authorSchema);
module.exports = { Book, Author };
