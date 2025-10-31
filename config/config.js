const { mongo } = require("mongoose");

const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    mongoUri: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/Portfolio'
};

module.exports = config;