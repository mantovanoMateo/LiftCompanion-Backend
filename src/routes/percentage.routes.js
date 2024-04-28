import { Router } from 'express'
import { authRequired } from '../middlewares/validateToken.js'
import {
    getPercentages,
    getPercentage,
    createPercentage,
    deletePercentage,
    getPercentagesByLift,
} from '../controllers/percentages.controller.js'

import { validateSchema } from '../middlewares/validator.middleware.js'
import {createPercentageSchema} from '../schemas/percentage.schema.js'

const router = Router()

router.get('/percentages', authRequired, getPercentages);

router.get('/percentages/:id', authRequired,getPercentage);

router.get('/percentages/ByLift/:liftId', authRequired,getPercentagesByLift);

router.post('/percentages', authRequired,validateSchema(createPercentageSchema),createPercentage);

router.delete('/percentages/:id', authRequired,deletePercentage);

export default router