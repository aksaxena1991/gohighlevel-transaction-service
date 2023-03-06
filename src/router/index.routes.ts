import transactionRoutes from "./transaction.routes";

import {Router} from 'express';
const router = Router()
router.use('/transaction/',transactionRoutes)
export default router