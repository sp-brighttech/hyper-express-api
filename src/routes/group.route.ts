import {Router} from "hyper-express";
import  v1Route from './v1/v1.route';

const router = new Router();

router.use('/v1',v1Route)

export default router;