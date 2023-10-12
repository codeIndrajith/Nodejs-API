const express = require('express')
const dotenv = require('dotenv') 
const logger = require('./middleware/logger')
const morgan = require('morgan')

// load to env variables
dotenv.config({ path: './config/config.env' })

const PORT = process.env.PORT || 5000;
const app = express();

// Dev logging middleware
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(logger);

const routerFile = require('./routes/routes')

// Mount routes
app.use('/api/v1/dev' , routerFile)

app.listen(PORT , console.log(`Server running on ${process.env.NODE_ENV} mode on port ${PORT}`))