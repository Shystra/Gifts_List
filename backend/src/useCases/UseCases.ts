import { hash } from "bcrypt";
import { ICreate } from "../interfaces/UserInterface";
import { UserRepository } from "../repositories/UserRepository"

class UseCase {
    private userRepository: UserRepository;
    constructor(){
        this.userRepository = new UserRepository()
    }

    async create({ name, email, password}: ICreate){
        const findUser = await  this.userRepository.findUserByEmail(email)
        if(findUser){
            return new Error('User Exists')
        }
        const hashPassword = await hash(password, 8);

        const create = this.userRepository.create({name , email , password : hashPassword})

        return create;
    }

}

export {UseCase}