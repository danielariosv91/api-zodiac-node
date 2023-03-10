
const express = require('express');
const mongoose = require('mongoose');
const signsRoutes = require('./routes/signs')

require('dotenv').config();

const app = express();
const port = parseInt(process.env.PORT) || 8080;


// middleware
app.use('/api', signsRoutes);
app.use(express.json());

//Routes 
app.get('/', (req, res) => {
    res.send('Esta es mi api')
})

// conect
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected")
    })
    .catch((error) => console.log(error))

app.listen(port, () => console.log('Server is listening on port', port))