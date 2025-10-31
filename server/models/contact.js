import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
    {
        firstname: { type: String, required: true, trim: true },
        lastname: { type: String, required: true, trim: true },
        email: { type: String, required: true, trim: true },
    },
    { collection: 'contacts' }
);

export default mongoose.model('Contact', contactSchema);