"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../../app");
const supertest_1 = __importDefault(require("supertest"));
describe('test routes', () => {
    const app = new app_1.App().app;
    it('should return status 200 for route /', async () => {
        const response = await (0, supertest_1.default)(app).get('/');
        expect(response.body).toStrictEqual({ ok: true });
    });
});
