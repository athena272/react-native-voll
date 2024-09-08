import { api } from "./api"

type LoginParams = {
    email: string,
    password: string
}

export async function login({ email, password }: LoginParams) {
    if (!email || !password) return null

    try {
        const result = await api.post('/auth/login', {
            email,
            senha: password,
        })
        console.log(result.data)
        return result.data
    } catch (error) {
        console.error(error)
        return null
    }
}