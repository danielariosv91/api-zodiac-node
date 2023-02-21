'use strict';
const express = require('express');
const bodyParser = require('body-parser')

const router = express.Router();
const app = express();
const { get, post } = require('../controllers/signsController'); 

let jsonParser = bodyParser.json()

// GET /api/users 
router.get('/signs', get)
router.post('/signs', jsonParser, post)

module.exports = router;