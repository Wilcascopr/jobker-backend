"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUp = exports.logOut = exports.logIn = void 0;
const User_1 = __importDefault(require("../models/User"));
const User = User_1.default.model;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const userValidators_1 = require("../validators/userValidators");
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        try {
            yield userValidators_1.registerValidator.validateAsync(req.body);
        }
        catch (error) {
            return res.status(400).json({ error: error.message });
        }
        const hashedPassword = yield bcrypt_1.default.hash(req.body.password, 16);
        if (0 < (yield User.count({ where: { email: req.body.email } })))
            return res.status(409).json({ error: 'Email already exists' });
        const user = yield User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPassword,
            roleId: req.body.roleId
        });
        const _a = user.toJSON(), { password } = _a, userResponse = __rest(_a, ["password"]);
        res.status(201).json({
            message: 'User created successfully',
            user: userResponse
        });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.signUp = signUp;
const logIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = userValidators_1.loginValidator.validate(req.body);
        if (results.error)
            return res.status(400).json({ error: results.error.message });
        const user = yield User.findOne({
            where: {
                email: req.body.email
            }
        });
        if (!user)
            return res.status(404).json({ error: 'User not found' });
        const isMatch = yield bcrypt_1.default.compare(req.body.password, user.password);
        if (!isMatch)
            return res.status(401).json({ error: 'Invalid Credentials' });
        const token = jsonwebtoken_1.default.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.cookie('jwt-token', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 });
        res.status(200).json({
            message: 'Logged in successfully',
            user
        });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.logIn = logIn;
const logOut = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.clearCookie('jwt-token');
        res.status(200).json({ message: 'Logged out successfully' });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.logOut = logOut;
