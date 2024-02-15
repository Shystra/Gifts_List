"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Controller_1 = require("../Controller");
// jest.mock('../../useCases/UseCases', () => {
//     return {
//         UseCase: jest.fn().mockImplementation(() => {
//             return {
//                 create: jest.fn().mockResolvedValueOnce
//                     ({
//                         name: "testeUser",
//                         email: "testeEemailUser@teste.com",
//                         password: "PasswordwithHash"
//                     })
//             }
//         })
//     };
// });
jest.mock('../../useCases/UseCases', () => ({
    UseCase: jest.fn().mockImplementation(() => ({
        create: jest.fn().mockImplementation(() => Promise.resolve({
            name: "testeUser",
            email: "testeEemailUser@teste.com",
            password: "PasswordwithHash"
        }))
    }))
}));
describe('Controller', () => {
    const controller = new Controller_1.Controller();
    let mockRequest;
    let mockResponse;
    let nextFunction = jest.fn();
    beforeEach(() => {
        mockRequest = {};
        mockResponse = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
        };
        nextFunction = jest.fn();
    });
    it('should return 201 and a user object when store is successful', async () => {
        mockRequest = {
            body: {
                name: "testeUser",
                email: "testeEemailUser@teste.com",
                password: "PasswordwithHash"
            }
        };
        console.log('Before calling store');
        await controller.store(mockRequest, mockResponse, nextFunction);
        console.log('After calling store');
        expect(mockResponse.status).toHaveBeenCalledWith(201);
        expect(mockResponse.json).toHaveBeenCalledWith(expect.objectContaining({
            name: "testeUser",
            email: "testeEemailUser@teste.com",
        }));
        // console.log(mockResponse.json!.mock.calls[0][0]);
    }, 20000);
    it('should call next with an error when store fails', async () => {
        const error = new Error("test error");
        jest.spyOn(controller['useCases'], 'create').mockRejectedValueOnce(error);
        mockRequest = {
            body: {
                name: "testeUser",
                email: "testeEemailUser@teste.com",
                password: "PasswordwithHash"
            }
        };
        await controller.store(mockRequest, mockResponse, nextFunction);
        expect(nextFunction).toHaveBeenCalledWith(error);
    });
});
