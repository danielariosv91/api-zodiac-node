const express = require('express');
const bodyParser = require('body-parser')
const app = express();


const signsService = require('../services/signs');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

exports.get = async (req, res) => {
    try {
        const response = await signsService.get();
        return res.json(response);
    }
    catch (e) {
        next(e);
    }
}

exports.post = async (req, res) => {
    try {
        const response = await signsService.post(req);
        return res.json(response);
    } catch (e) {
        console.log(e)
    }
}