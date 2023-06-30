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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerValidator = exports.loginValidator = void 0;
const joi_1 = __importDefault(require("joi"));
const Role_1 = __importDefault(require("../models/Role"));
const loginValidator = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().required()
});
exports.loginValidator = loginValidator;
const registerValidator = joi_1.default.object({
    firstName: joi_1.default.string().required(),
    lastName: joi_1.default.string().required(),
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().required(),
    confirmPassword: joi_1.default.string().required(),
    roleId: joi_1.default.number().required().external((value, helpers) => __awaiter(void 0, void 0, void 0, function* () {
        const validRole = yield Role_1.default.model.count({ where: { id: value } });
        if (validRole < 1)
            return helpers.error('any.invalid', { custom: 'Invalid Role Id' });
        return value;
    }))
});
exports.registerValidator = registerValidator;
