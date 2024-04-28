import { Router } from 'express'
import { authRequired } from '../middlewares/validateToken.js'
import {
    getLifts,
    getLift,
    createLift,
    deleteLift
} from '../controllers/lifts.controller.js'

import { validateSchema } from '../middlewares/validator.middleware.js'
import { createLiftSchema } from '../schemas/lift.schema.js'

const router = Router()

router.get('/lifts', authRequired, getLifts);

router.get('/lifts/:id', authRequired, getLift);

router.post('/lifts', authRequired, validateSchema(createLiftSchema), createLift);

router.delete('/lifts/:id', authRequired, deleteLift)

export default router