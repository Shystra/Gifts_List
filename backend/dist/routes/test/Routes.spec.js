"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../../app");
const supertest_1 = __importDefault(require("supertest"));
const Schema_1 = require("../../models/Schema");
describe('route / ', () => {
    const app = new app_1.App().app;
    it('should return status 200 and { ok: true } for route GET /', async () => {
        const response = await (0, supertest_1.default)(app).get('/');
        expect(response.status).toBe(200);
        expect(response.body).toStrictEqual({ ok: true });
    });
});
describe('POST /users', () => {
    // beforeAll(async () => {
    // })
    afterAll(async () => {
        await Schema_1.Users.deleteMany({ email: "teste@teste.com" });
    });
    it('should create user and return status 201 with _id', async () => {
        const app = new app_1.App().app;
        const userData = {
            name: 'Lucas',
            email: "teste@teste.com",
            password: "Password123",
        };
        const response = await (0, supertest_1.default)(app).post('/users').send(userData);
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("_id");
    });
});
