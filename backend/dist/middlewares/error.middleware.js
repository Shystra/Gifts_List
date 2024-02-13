"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
function errorMiddleware(err, request, response, next) {
    const status = err.status ?? 500;
    const message = err.message ?? 'Internal Server Error';
    response.status(status).json({
        status,
        message
    });
}
exports.errorMiddleware = errorMiddleware;
