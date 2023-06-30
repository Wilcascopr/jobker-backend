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
const express_1 = __importDefault(require("express"));
const connection_1 = __importDefault(require("./database/connection"));
const migrations_1 = __importDefault(require("./database/migrations"));
const index_1 = __importDefault(require("./routes/index"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use(index_1.default);
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sequelize = yield (0, connection_1.default)();
        if (!sequelize)
            throw new Error("Unable to connect to the database");
        yield (0, migrations_1.default)(sequelize);
        app.listen(3000, () => {
            console.log("Server is running");
        });
    }
    catch (error) {
        console.error(error);
    }
});
startServer();
