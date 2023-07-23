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
const User_1 = __importDefault(require("../models/User"));
const Post_1 = __importDefault(require("../models/Post"));
const Role_1 = __importDefault(require("../models/Role"));
const Permission_1 = __importDefault(require("../models/Permission"));
const initModels = (sequelize) => __awaiter(void 0, void 0, void 0, function* () {
    User_1.default.initModel(sequelize);
    Post_1.default.initModel(sequelize);
    Role_1.default.initModel(sequelize);
    Permission_1.default.initModel(sequelize);
    User_1.default.associate();
    Post_1.default.associate();
    Role_1.default.associate();
    Permission_1.default.associate();
});
const migrate = (sequelize) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        initModels(sequelize);
        yield sequelize.sync({ alter: true });
        console.log("Migrations complete");
    }
    catch (error) {
        console.error("Unable to migrate: ", error);
    }
});
exports.default = migrate;
