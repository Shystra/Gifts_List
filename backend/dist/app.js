"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const Users_Routes_1 = __importDefault(require("./routes/Users.Routes"));
const dataBase_1 = require("./dataBase");
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.dbMongoose = new dataBase_1.DbConnection();
        this.dbMongoose.connect();
        this.setupRootRoute();
        this.routes();
    }
    config() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    routes() {
        new Users_Routes_1.default(this.app);
    }
    setupRootRoute() {
        this.app.get('/', (req, res) => {
            res.json({ ok: true });
        });
    }
    listen(port) {
        this.app.listen(port, () => {
            console.log('Server is running;');
        });
    }
}
exports.App = App;
