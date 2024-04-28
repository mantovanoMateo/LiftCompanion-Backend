import {z} from 'zod'

export const createPrSchema = z.object({
    kg: z.string({
        required_error: 'Kg is required'
    })
})