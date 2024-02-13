"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Controller_1 = require("../controllers/Controller");
class Routes {
    constructor(app) {
        this.router = (0, express_1.Router)();
        this.usersController = new Controller_1.Controller();
        this.getRoutes();
        app.use('/users', this.router);
    }
    getRoutes() {
        this.router.post('/', this.usersController.store.bind(this.usersController));
    }
}
exports.default = Routes;
