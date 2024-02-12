import { Application, Router } from 'express';
import { Controller } from '../controllers/Controller';


class Routes {
    public router: Router;
    // private controller: Controller;

    constructor(private app: Application){
        this.router = Router();
        // const repository = new UserRepository()
        // const useCase = new UseCase()
        // this.controller = new Controller()
    }

    initRoutes(){
        // this.router.post('/', this.controller.create.bind(this.controller));
    }
}

export default Routes;
