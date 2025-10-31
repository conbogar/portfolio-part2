import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, trim: true },
        firstname: { type: String, required: true, trim: true },
        lastname: { type: String, required: true, trim: true },
        email: { type: String, required: true, trim: true },
        completion: { type: Date },
        description: { type: String }
    },
    { collection: 'projects' }
);

export default mongoose.model('Project', projectSchema);