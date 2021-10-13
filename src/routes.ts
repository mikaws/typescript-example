import { Request, Response } from "express";
import createUser from './services/CreateUser'

export default function showUser(request: Request, response:Response) { // route
    const user = createUser({ // create a user
        email: 'michaelhenriqued@gmail.com',
        password: '12345678',
        techs: [
            'NodeJS',
            { title: 'Javascript', experience: 65}
        ]
    })
    return response.json(user) // return user in json
}