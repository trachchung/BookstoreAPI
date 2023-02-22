"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// https://www.youtube.com/watch?v=Nl3y1jYPbr4&ab_channel=DanielTruongDev
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const authorRoute = require("./routes/author");
// const bookRoute = require("./routes/book");
// const helmet = require("helmet");
// dotenv.config();
// connect db
mongoose_1.default.connect(process.env.MONGODB_URL, () => {
    console.log("Connected to mongoDB");
});
const app = (0, express_1.default)();
// const port = process.env.PORT;
const PORT = 8000;
app.use(body_parser_1.default.json({ limit: "50mb" }));
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("common"));
//Routes
app.use("/v1/author", authorRoute);
app.get('/', (req, res) => {
    res.status(200).send("Express server");
});
app.listen(PORT, () => {
    console.log(`[server]: Server is running at localhost:${PORT}`);
});
