import { NextFunction, Request, Response } from "express";
import { UseCase } from "../useCases/UseCases";

class Controller {
    constructor(private useCase: UseCase){}


    async addUser (request: Request, response: Response, next: NextFunction) {
        const { name, email} = request.body;
        const { id } = request.params;

        try{
            const createUser = await this.useCase.addUser(id, name, email);
            return response.status(200).json(createUser)
        } catch(error) {
            next(error);
        }
    }
}

export {Controller};