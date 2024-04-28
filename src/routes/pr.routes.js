import {Router} from 'express'
import {authRequired} from '../middlewares/validateToken.js'
import {
    getPr,
    getPrs,
    getPrsByLitf,
    createPr,
    deletePr
} from '../controllers/prs.controller.js'

import { validateSchema } from '../middlewares/validator.middleware.js'
import {createPrSchema} from '../schemas/pr.schema.js'

const router = Router()

router.get('/prs',authRequired,getPrs);

router.get('/prs/:id',authRequired,getPr);

router.get('/prs/ByLifts/:liftId',authRequired,getPrsByLitf);

router.post('/prs',authRequired,validateSchema(createPrSchema),createPr);

router.delete('/prs/:id',authRequired,deletePr);

export default router