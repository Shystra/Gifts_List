import { Application } from 'express';


class Routes {
    constructor(private app: Application){
        this.routes();
    }

    public routes(): void {
        this.app.get('/', (req, resp) => {
            return resp.json({ ok: true });
        });
    }
}

export default Routes;
