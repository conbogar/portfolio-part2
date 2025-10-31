import express from 'express';
import { 
    getContacts, 
    createContact, 
    updateContact, 
    getContactById, 
    deleteContact, 
    deleteAllContacts 
} from '../controllers/contact.js';
import authMiddleware from '../middlewares/auth.js';

const router = express.Router();

router.get('/:id', authMiddleware, getContactById);
router.put('/:id', authMiddleware, updateContact);
router.delete('/:id', authMiddleware, deleteContact);
router.delete('/', authMiddleware, deleteAllContacts);
router.get('/', authMiddleware, getContacts);
router.post('/', authMiddleware, createContact);

export default router;