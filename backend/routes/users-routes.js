import { Router } from 'express';
import { check } from 'express-validator';

import { getUsers, signup, login } from '../controllers/users-controller.js'

const router = Router();

router.get('/', getUsers);

router.post('/signup',
    [
        check('name').not().isEmpty(),
        check('email').normalizeEmail().isEmail(), // Test@test.com => test@test.com
        check('password').isLength({ min: 6 })
    ],
    signup
);

router.post('/login', login);

export default router;
