const fs = require('fs')
const mongoose = require('mongoose')
const color = require('colors')
const dotenv = require('dotenv')

// load env vars
dotenv.config({path : './config/config.env'})

// load models
const Bootcamp = require('./models/Bootcamp');

// connect the database
mongoose.connect(process.env.MONGO_URI);

// read JSON files
const bootcamps = JSON.parse(fs.readFileSync(`${__dirname}/_data/bootcamps.json`, 'utf-8'))

// import into db
const importData = async () => {
    try {
        await Bootcamp.create(bootcamps)
        console.log("Data imported successfully".green.inverse)
        process.exit();
    } catch (error) {
        console.error(error)
    }
}

// delete all the data in db
const deleteData = async () => {
    try {
        await Bootcamp.deleteMany();
        console.log("Destroyed the data".red.inverse);
        process.exit();
    }catch(error) {
        console.error(error)
    }
}

if(process.argv[2] === '-i') {
    importData();
}else if(process.argv[2] === '-d') {
    deleteData();
}