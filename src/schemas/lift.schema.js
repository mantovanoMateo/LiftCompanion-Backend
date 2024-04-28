import {z} from 'zod'

export const createLiftSchema = z.object({
    name: z.string({
        required_error: 'Name is required'
    }),
    type: z.string({
        required_error: 'type is required'
    })
})