const express = require('express')
const dotenv = require('dotenv') 

// load to env variables
dotenv.config({ path: './config/config.env' })

const PORT = process.env.PORT || 5000;
const app = express();


// create the route
app.get('/' , (req , res) => {
    // res.send("<h1>Hello express</h1>")

    res.status(200).json({ success : true , data : { id : 1} })
})

app.post('/api/v1/dev' , (req , res) => {   
    res.status(200).json({ success : true , msg : "create new development" })
})

app.put('/api/v1/dev/:id' , (req , res) => {   
    res.status(200).json({ success : true , msg : `Update in id : ${req.params.id} `})
})

app.delete('/api/v1/dev/:id' , (req , res) => {   
    res.status(200).json({ success : true , msg : `Delete in id : ${req.params.id}` })
})

app.listen(PORT , console.log(`Server running on ${process.env.NODE_ENV} mode on port ${PORT}`))