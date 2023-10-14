const mongoose = require('mongoose')
const colors = require('colors')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);

        console.log(`MongoDB connected: ${conn.connection.host}`.blue.underline.bold);
    } catch (error) {
        console.error(`MongoDB connection error: ${error}`.red);
    }
}


module.exports = connectDB;