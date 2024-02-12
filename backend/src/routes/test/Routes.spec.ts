import { App } from "../../app"
import request from 'supertest';

describe('test routes', () => {
    const app = new App().app
    it('should return status 200 for route /', async () => {
        const response = await request(app).get('/');
        
        expect(response.body).toStrictEqual({ ok: true })
    });
})