"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
/* GET quotes listing. */
exports.default = router.get('/register', function (req, res, next) {
    res.json({
        data: [
            {
                quote: 'Register .',
                author: 'Register Page'
            }
        ],
        meta: {
            page: 1
        }
    });
});
