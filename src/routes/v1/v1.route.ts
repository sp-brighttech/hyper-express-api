import {Router} from "hyper-express";
import authRoute from "./auth.route";

const router = new Router();

router.use('/auth/',authRoute)

export default router