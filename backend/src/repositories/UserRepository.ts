import { ICreate } from "../interfaces/UserInterface";
import { Users } from "../models/Schema";

class UserRepository{

    async create({ name, email, password}: ICreate){
        const user = await Users.create({ name, email, password });
        const userObject = user.toObject();
        delete userObject.password; // Remove do objeto
        return userObject;
        
    }

    async findUserByEmail(email: string){
        const result = await  Users.findOne({ email,});
        console.log("🚀 ~ UserRepository ~ findUserByEmail ~ result:", result)
        return result;
    }
}

export {UserRepository}