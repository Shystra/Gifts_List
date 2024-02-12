import { HttpException } from "../interfaces/HttpException";
import { UserRepository } from "../repositories/UserRepository"

class UseCase {

    constructor(private repository: UserRepository){}

    async addUser(id: string, name: string, email: string){
        const findUser = await this.repository.findId(id);

        if(!findUser) throw new HttpException(400, 'User not found');
        // lógica para criar usuario...
    }
}

export {UseCase}