"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function showUser(request, response) {
    var user = (0, CreateUser_1.default)({
        email: 'michaelhenriqued@gmail.com',
        password: '12345678',
        techs: [
            'NodeJS',
            { title: 'Javascript', experience: 65 }
        ]
    });
    return response.json(user);
}
exports.default = showUser;
