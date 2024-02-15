import { App } from "../../app"
import request from 'supertest';
import { Users } from "../../models/Schema";

describe('route / ', () => {
    const app = new App().app;
    it('should return status 200 and { ok: true } for route GET /', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.body).toStrictEqual({ ok: true });
    });
});

describe('POST /users', () => {
    const app = new App().app
    afterAll(async () => {
        await Users.deleteMany({ email: "teste@teste.com"});
    })

    it('should create user and return status 201 with _id', async () => {
        const userData = {
            name: 'Lucas',
            email: "teste@teste.com",
            password: "Password123",
        };

        const response = await request(app).post('/users').send(userData);

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("_id")
    });
    

    it("should't create user and not return status 201", async () => {
        const userDataExistsDataBase = {
            name: 'lucas1',
            email: 'teste123@teste1213.com',
            password: 'teste123'
        };
        const response = await request(app).post('/users').send(userDataExistsDataBase);

        expect(response.status).toBe(500);
    })
});