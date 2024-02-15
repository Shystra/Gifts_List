"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// import { v4 as uuid } from 'uuid'
const userSchema = new mongoose_1.default.Schema({
    name: String,
    email: String,
    password: String,
});
const Users = mongoose_1.default.model("User", userSchema, "users");
exports.Users = Users;
