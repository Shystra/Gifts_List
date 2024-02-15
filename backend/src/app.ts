import express, { Application } from 'express';
import Routes from './routes/Users.Routes';
import { DbConnection } from './dataBase';

export class App {
    public app: Application;
    public dbMongoose: DbConnection;
    constructor() {
        this.app = express();
        this.config();
        this.dbMongoose = new DbConnection();
        this.dbMongoose.connect(); 
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
