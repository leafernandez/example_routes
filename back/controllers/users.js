const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/count', async (req, res) => {
    try {
        const countUsers = await User.countDocuments()

        res.json(countUsers);
    } catch (error) {
        console.log('Error occured: ', error);
        res.status(500).send(error)
    }
})

router.get('/', async (req, res) => {
    try {
        const users = await User.find().select('_id firstName').lean()

        res.json(users);
    } catch (error) {
        console.log('Error occured: ', error);
        res.status(500).send(error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id).lean()
        
        res.json(user);
    } catch (error) {
        console.log('Error occured: ', error);
        res.status(500).send(error)
    }
})

router.post('/add/many', async (req, res) => {
    console.log('body post', req.body);

    try {
        await User.insertMany(req.body)

        res.json('/add ok')
    } catch (error) {
        console.log('Error occured: ', error);
        res.status(500).send(error)
    }

})

module.exports = router