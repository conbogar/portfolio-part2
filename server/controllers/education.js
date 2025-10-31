import Education from '../models/education.js';

export async function getEducation(req, res) {
    try {
        const items = await Education.find().sort({ _id: -1 });
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve education records', error: error.message });
    }
}

export async function createEducation(req, res) {
    try {
        const created = await Education.create(req.body);
        res.status(201).json(created);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create education record', error: error.message });
    }
}

export async function getEducationById(req, res) {
    try {
        const education = await Education.findById(req.params.id);
        if (!education) {
            return res.status(404).json({ message: 'Education record not found' });
        }
        res.json(education);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve education record', error: error.message });
    }
}

export async function updateEducation(req, res) {
    try {
        const updated = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) {
            return res.status(404).json({ message: 'Education record not found' });
        }
        res.json(updated);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update education record', error: error.message });
    }
}

export async function deleteEducation(req, res) {
    try {
        const deleted = await Education.findByIdAndDelete(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Education record not found' });
        }
        res.json({ message: 'Education record deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete education record', error: error.message });
    }
}

export async function deleteAllEducation(req, res) {
    try {
        await Education.deleteMany({});
        res.json({ message: 'All education records deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete all education records', error: error.message });
    }
}