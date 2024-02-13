"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
class UserRepository {
    async create({ name, email, password }) {
        const result = await prisma.users.create({
            data: {
                name,
                email,
                password,
            }
        });
    }
    async findUserByEmail(email) {
        const result = await prisma.users.findUnique({
            where: {
                email,
            },
        });
        return result;
    }
}
exports.UserRepository = UserRepository;
