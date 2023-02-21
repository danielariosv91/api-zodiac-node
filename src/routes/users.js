const express = require('express');
const bodyParser = require('body-parser')
const userSchema = require('../models/user')

const app = express()
const router = express.Router();

// create application/json parser
console.log(bodyParser.json())

let jsonParser = bodyParser.json()

// POST /api/users gets JSON bodies
router.post('/users', jsonParser, function (req, res) {
    const user = userSchema(req.body)

    user.save()
        .then((data) => { res.json(data) })
        .catch((error) => console.log(error))
})

// GET /api/users 
router.get('/users', function (req, res) {
    userSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json(error))
})

// GET BY ID /api/users 
router.get('/users/:id', function (req, res) {
    const { id } = req.params;

    userSchema.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json(error))
})


module.exports = router;