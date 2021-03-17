const mongoose = require('mongoose');
const config = require('config');

const connectDB = async () => {
    try {
        await mongoose.connect(config.get("MONGO_URI"), { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
        console.log("Data Base Connected")
    } catch (error) {
        console.error(error)
    }
}

module.exports = connectDB;