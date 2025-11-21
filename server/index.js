import express from 'express';
import morgan from 'morgan';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';
import contactRoutes from './routes/contact.js';
import educationRoutes from './routes/education.js';
import projectRoutes from './routes/project.js';
import userRoutes from './routes/user.js';
import authRoutes from './routes/auth.js';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '..', '.env') });

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { dbName: 'Portfolio'});
const connection = mongoose.connection;
connection.on('error', console.error.bind(console, "MongoDB connection error: "));
connection.once('open', () => { console.log('Connected to MongoDB'); });

const app = express();
;
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

//Routes
app.use('/educations', educationRoutes);
app.use('/contacts', contactRoutes);
app.use('/projects', projectRoutes);
app.use('/users', userRoutes);
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log(`Server running at http://localhost:${PORT}/`);