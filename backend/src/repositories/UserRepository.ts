import { User } from "../entities/User";

interface UserRepository {
    add(user: User): Promise<User>;
    findId(id: string): Promise<User | undefined> ;
    verifyUserExists(email: string):Promise<any>;
}

export {UserRepository}