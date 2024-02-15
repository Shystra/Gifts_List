"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const UseCases_1 = require("../useCases/UseCases");
class Controller {
    constructor() {
        this.useCases = new UseCases_1.UseCase();
    }
    //criação
    async store(req, res, next) {
        const { name, email, password } = req.body;
        try {
            const result = await this.useCases.create({ name, email, password });
            if (result instanceof Error) {
                return res.status(400).json(result.message);
            }
            return res.status(201).json(result);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.Controller = Controller;
