import Contact from '../models/contact.js';

export async function getContacts(req, res) {
    try {
        const items = await Contact.find().sort({ _id: -1 });
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve contacts', error: error.message });
    }
}

export async function createContact(req, res) {
    try {
        const created = await Contact.create(req.body);
        res.status(201).json(created);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create contact', error: error.message });
    }
}

export async function getContactById(req, res) {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.json(contact);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve contact', error: error.message });
    }
}

export async function updateContact(req, res) {
    try {
        const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.json(updated);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update contact', error: error.message });
    }
}

export async function deleteContact(req, res) {
    try {
        const deleted = await Contact.findByIdAndDelete(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.json({ message: 'Contact deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete contact', error: error.message });
    }
}

export async function deleteAllContacts(req, res) {
    try {
        await Contact.deleteMany({});
        res.json({ message: 'All contacts deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete contacts', error: error.message });
    }
}