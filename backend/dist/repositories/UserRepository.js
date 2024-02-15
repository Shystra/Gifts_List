"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const Schema_1 = require("../models/Schema");
class UserRepository {
    async create({ name, email, password }) {
        const user = await Schema_1.Users.create({ name, email, password });
        const userObject = user.toObject();
        delete userObject.password; // Remove do objeto
        return userObject;
    }
    async findUserByEmail(email) {
        const result = await Schema_1.Users.findOne({ email, });
        // console.log("🚀 ~ UserRepository ~ findUserByEmail ~ result:", result)
        return result;
    }
}
exports.UserRepository = UserRepository;
