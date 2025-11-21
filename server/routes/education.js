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
import adminMiddleware from '../middlewares/admin.js';

const router = express.Router();

router.get('/:id', authMiddleware, getEducationById);
router.put('/:id', authMiddleware, updateEducation);

router.delete('/:id', authMiddleware, adminMiddleware, deleteEducation);
router.delete('/', authMiddleware, adminMiddleware, deleteAllEducation);
router.get('/', authMiddleware, adminMiddleware, getEducation);
router.post('/', authMiddleware, adminMiddleware, createEducation);

export default router;