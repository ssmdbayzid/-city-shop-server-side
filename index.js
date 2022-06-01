const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()
const port = process.env.PORT || 5000;




// Middleware
app.use(express.json());
app.use(cors())

app.get('/', (req, res)=>{
    res.send('City Shop Client Server')
})

app.listen(port, ()=>{
    console.log('City Server sun with', port)
})