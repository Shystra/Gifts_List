"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseCase = void 0;
const bcrypt_1 = require("bcrypt");
const UserRepository_1 = require("../repositories/UserRepository");
class UseCase {
    constructor() {
        this.userRepository = new UserRepository_1.UserRepository();
    }
    async create({ name, email, password }) {
        const findUser = await this.userRepository.findUserByEmail(email);
        if (findUser) {
            return new Error('User Exists');
        }
        const hashPassword = await (0, bcrypt_1.hash)(password, 8);
        const create = this.userRepository.create({ name, email, password: hashPassword });
        return create;
    }
}
exports.UseCase = UseCase;
