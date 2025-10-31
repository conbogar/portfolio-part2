import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, trim: true },
        firstname: { type: String, required: true, trim: true },
        lastname: { type: String, required: true, trim: true },
        email: { type: String, required: true, trim: true },
        completion: { type: Date },
        description: { type: String }
    },
    { collection: 'educations' }
);

export default mongoose.model('Education', educationSchema);