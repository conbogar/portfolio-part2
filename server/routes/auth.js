import express from 'express';
import { loginUser } from '../controllers/user.js';

const router = express.Router();

router.post('/signin', loginUser);

router.get('/signout', (req, res) => {
  return res.status(200).json({ message: 'Signout successful' });
});

export default router;