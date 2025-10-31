import config from './config/config.js';
import app from './server/index.js';
import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
mongoose
.connect(config.mongoUri)
.then(() => {
    console.log('Connected to MongoDB', config.mongoUri);
})

mongoose.connection.on('error', () => {
    throw new Error(`Unable to connect to database: ${config.mongoUri}`);
});

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Portfolio application' });
});

app.listen(config.port, (error) => {
    if (error) console.error(error);
    console.log('Server started on part %s', config.port);
});

