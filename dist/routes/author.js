"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authorController_1 = __importDefault(require("../controllers/authorController"));
// Add author
express_1.default.post("/", authorController_1.default.addAuthor);
module.exports = express_1.default;
