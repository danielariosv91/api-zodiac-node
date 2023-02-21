'use strict';
const mongoose = require("mongoose");
const signsSchema = require('../models/signs')

exports.get = async function (query, page, limit) {
    let users = await signsSchema.find()
    return users;
}

exports.post = async (req, res) => {
    let sign = signsSchema(req.body)
    await sign.save();

    return "created";
}