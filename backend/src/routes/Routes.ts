import { Application, Router } from 'express';
import { Controller } from '../controllers/Controller';

class Routes {
    private router: Router;
    private usersController: Controller;

    constructor(app: Application) {
        this.router = Router();
        this.usersController = new Controller();
        this.getRoutes();
        app.use('/users', this.router);
    }

    private getRoutes() {
        this.router.post('/', this.usersController.store.bind(this.usersController));
    }
}

export default Routes;
