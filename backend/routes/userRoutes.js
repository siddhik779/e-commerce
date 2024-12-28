import express from 'express';
import asyncHandler from 'express-async-handler';
import User from '../models/User.js';

const router = express.Router();

// Register a new user
router.post(
    '/',
    asyncHandler(async (req, res) => {
        const { name, email, password } = req.body;

        const userExists = await User.findOne({ email });
        if (userExists) {
            res.status(400).json({ message: 'User already exists' });
            return;
        }

        const user = await User.create({ name, email, password });
        if (user) {
            res.status(201).json({
                _id: user.id,
                name: user.name,
                email: user.email,
            });
        } else {
            res.status(400).json({ message: 'Invalid user data' });
        }
    })
);

export default router;
