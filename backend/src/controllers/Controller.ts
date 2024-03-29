import { NextFunction, Request, Response } from "express";
import { UseCase } from "../useCases/UseCases";

class Controller {
    private useCases: UseCase;
    constructor() {
        this.useCases = new UseCase();
    }


    //criação
    async store(req: Request, res: Response, next: NextFunction) {
        const { name, email, password } = req.body;

        try {
            const result = await this.useCases.create({ name, email, password })
            if(result instanceof Error){
                return res.status(400).json(result.message);
            } 


            return res.status(201).json(result);

        } catch (error) {
            next(error)
        }
    }
}

export { Controller };