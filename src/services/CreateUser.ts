interface TechObject { // techs types
    title: string
    experience: number
}

interface CreateUser { // user types
    name?: string
    email: string
    password: string
    techs: Array<string | TechObject>
}

export default function createUser({ name, email, password, techs }: CreateUser) {
    const user = {
        name,
        email,
        password,
        techs
    }

    return user
}
