import {Router} from 'hyper-express';
import AuthController from '../../controllers/auth.controller';
import {validateRequest} from '../../middlewares/validation.middleware';
import {registerSchema, loginSchema, forgotPasswordSchema} from "../../validations/auth.validation";

const router = new Router();

router.post('/login', validateRequest(loginSchema), AuthController.login.bind(AuthController));
router.post('/register', validateRequest(registerSchema), AuthController.register.bind(AuthController));
router.post('/forgot-password', validateRequest(forgotPasswordSchema), AuthController.forgotPassword.bind(AuthController));

export default router;
