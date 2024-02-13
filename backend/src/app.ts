import express, { Application } from 'express';
import Routes from './routes/Routes';

export class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    private config(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    private routes(): void {
        new Routes(this.app);
    }

    listen(port: number) {
        this.app.listen(port, () => {
            console.log('Server is running;');
        });
    }
}
