import express from 'express';
import { 
    getEducation, 
    createEducation, 
    getEducationById, 
    deleteEducation, 
    updateEducation, 
    deleteAllEducation 
} from '../controllers/education.js';
import authMiddleware from '../middlewares/auth.js';

const router = express.Router();

router.get('/:id', authMiddleware, getEducationById);
router.put('/:id', authMiddleware, updateEducation);
router.delete('/:id', authMiddleware, deleteEducation);
router.delete('/', authMiddleware, deleteAllEducation);
router.get('/', authMiddleware, getEducation);
router.post('/', authMiddleware, createEducation);

export default router;