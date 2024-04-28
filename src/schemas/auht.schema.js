import {z} from 'zod'

export const registerSchema = z.object({
    name: z.string({
        required_error: 'Useranme is required',
    }),
    lastname: z.string({
        required_error: 'Useranme is required',
    }),
    username: z.string({
        required_error: 'Useranme is required',
    }),
    email: z.string({
        required_error: 'Email is required',
    }).email({
        message: 'Invalid email',
    }),
    password: z.string({
        required_error:'Password is required',
    }).min(6, {
        message: 'Password must be at least 6 characters'
    })
})

export const logInSchema = z.object({
    email: z.string({
        required_error: 'Email is required',
    }).email({
        message: 'Invalid email',
    }),
    password: z.string({
        required_error:'Password is required',
    }).min(6, {
        message: 'Password must be at least 6 characters'
    }),
})