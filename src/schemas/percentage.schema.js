import {z} from 'zod'

export const createPercentageSchema = z.object({
    percentage: z.string({
        required_error: 'Percentage is required'
    })
})