"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbConnection = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config({ path: '../.env' });
class DbConnection {
    connect() {
        const db = process.env.URL_MONGOOSE ?? '';
        // console.log('String de Conexão:', db);
        mongoose_1.default
            .connect(db)
            .then(() => {
            console.log('Database connected successfully');
        })
            .catch((err) => {
            console.error(`Error connecting database ${err}`);
        });
    }
}
exports.DbConnection = DbConnection;
