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
            throw new Error('User already exists');
        }
        const hashPassword = await (0, bcrypt_1.hash)(password, 8);
        try {
            const create = await this.userRepository.create({ name, email, password: hashPassword });
            return create;
        }
        catch (error) {
            console.error("erro no case", error);
            throw error;
        }
    }
}
exports.UseCase = UseCase;
