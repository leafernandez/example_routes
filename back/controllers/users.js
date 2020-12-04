const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/count', async (req, res) => {
    try {
        const countUsers = await User.countDocuments()

        //Structure à utiliser avant de finir de coder
        // const countUsers = 3

        res.json(countUsers);
    } catch (error) {
        console.log('Error occured: ', error);
        res.status(500).send(error)
    }
})

router.get('/', async (req, res) => {
    try {
        const users = await User.find().select('_id firstName').lean()

        //Structure à utiliser avant de finir de coder
        // const users = [
        //     {
        //         "_id": "5fca3fe9dc93324b7f8af904",
        //         "firstName": "Leandro"
        //     },
        //     {
        //         "_id": "5fca3fe9dc93324b7f8af905",
        //         "firstName": "Nina"
        //     },
        //     {
        //         "_id": "5fca3fe9dc93324b7f8af906",
        //         "firstName": "Marc"
        //     }
        // ]

        res.json(users);
    } catch (error) {
        console.log('Error occured: ', error);
        res.status(500).send(error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id).lean()

        //Structure à utiliser avant de finir de coder
        // const user = {
        //     _id: "5fca3fe9dc93324b7f8af905",
        //     firstName: "Nina",
        //     surname: "Gautreau",
        //     age: 27,
        //     city: "Bordeaux",
        //     country: "France",
        //     hasCar: true,
        // }

        res.json(user);
    } catch (error) {
        console.log('Error occured: ', error);
        res.status(500).send(error)
    }
})

// Executer juste une fois
router.post('/add/many', async (req, res) => {
    try {
        await User.insertMany(req.body)

        res.json('/add ok')
    } catch (error) {
        console.log('Error occured: ', error);
        res.status(500).send(error)
    }

})

module.exports = router