const express = require("express");
const quatlasData = require("../models/Quatlas");
const { body, validationResult } = require('express-validator');

const router = express.Router();


router.get("/data", async (req, res) => {
    const datas = await quatlasData.find();
    return res.status(200).json(datas)
});

router.post("/create", [
    body('name', 'enter a valid name').isLength({ min: 3 }),
    body('usn', 'enter a valid usn').isLength({ min: 3 }),
    body('branch', 'enter a valid branch').isLength({ min: 3 }),
    body('number', 'enter a valid number').isLength({ min: 3 }),
    body('email', 'enter a valid email').isEmail(),
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        const { name, usn, branch, number, email } = req.body;
        const datas = await quatlasData.create({
            name,
            usn,
            branch,
            number,
            email
        })
        if(!res.status === 201){
            return res.status(400).json({error:"request failed try agin after some time"});
        }
        return res.status(201).json(datas);
    } catch (error) {
        return res.status(400).json({error:error.message});

    }
})


module.exports = router;