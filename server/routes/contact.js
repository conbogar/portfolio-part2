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
import adminMiddleware from '../middlewares/admin.js';

const router = express.Router();

router.get('/:id', authMiddleware, adminMiddleware, getContactById);
router.put('/:id', authMiddleware, adminMiddleware, updateContact);
router.delete('/:id', authMiddleware, adminMiddleware, deleteContact);
router.delete('/', authMiddleware, adminMiddleware, deleteAllContacts);
router.get('/', authMiddleware, getContacts);

router.post('/', createContact);

export default router;