"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authRoutes_1 = __importDefault(require("./authRoutes"));
const postsRoutes_1 = __importDefault(require("./postsRoutes"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.use(authRoutes_1.default);
router.use(postsRoutes_1.default);
exports.default = router;