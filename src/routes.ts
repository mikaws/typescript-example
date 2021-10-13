import { Request, Response } from "express";
import createUser from './services/CreateUser'

export default function showUser(request: Request, response:Response) {
    const user = createUser({
        email: 'michaelhenriqued@gmail.com',
        password: '12345678',
        techs: [
            'NodeJS',
            { title: 'Javascript', experience: 65}
        ]
    })
    return response.json(user)
}