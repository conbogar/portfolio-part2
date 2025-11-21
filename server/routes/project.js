import express from 'express';
import {
    getAllProjects,
    getProjectById,
    updateProject,
    deleteProject,
    createProject,
    deleteAllProjects
} from '../controllers/project.js'

import authMiddleware from '../middlewares/auth.js';
import adminMiddleware from '../middlewares/admin.js';

const router = express.Router();

router.get('/', authMiddleware, getAllProjects);
router.get('/:id', authMiddleware, getProjectById);

router.post('/', authMiddleware, adminMiddleware, createProject);
router.put('/:id', authMiddleware, adminMiddleware, updateProject);
router.delete('/:id', authMiddleware, adminMiddleware, deleteProject);
router.delete('/', authMiddleware, adminMiddleware, deleteAllProjects);

export default router;