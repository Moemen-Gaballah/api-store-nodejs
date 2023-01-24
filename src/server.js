"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import * as dotenv from 'dotenv'
const dotenv_1 = __importDefault(require("dotenv"));
const login_1 = __importDefault(require("./routes/login"));
const register_1 = __importDefault(require("./routes/register"));
const body_parser_1 = __importDefault(require("body-parser"));
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
const address = `0.0.0.0:${PORT}`;
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use('/login', login_1.default);
app.use('/register', register_1.default);
app.get('/healthz', function (req, res) {
    res.send({ status: 'OK' });
});
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(PORT, () => {
    console.log(`starting app on: ${address}`);
});
