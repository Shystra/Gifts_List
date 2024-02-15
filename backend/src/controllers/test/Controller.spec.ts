import { NextFunction, Request, Response } from "express";
import { Controller } from "../Controller";

interface MockResponse extends Response {
    status: jest.Mock;
    json: jest.Mock;
}

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
    const controller = new Controller();
    let mockRequest: Partial<Request>
    let mockResponse: MockResponse;

    let nextFunction: NextFunction = jest.fn();

    beforeEach(() => {
        mockRequest = {}
        mockResponse = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
        } as Partial<MockResponse> as MockResponse;
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
        await controller.store(mockRequest as Request, mockResponse as Response, nextFunction);
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

        await controller.store(mockRequest as Request, mockResponse as Response, nextFunction);
        expect(nextFunction).toHaveBeenCalledWith(error);
    })
})