
//////////////////////////////////////////
///   api endpoints for managing users //
////////////////////////////////////////

const router = require('express').Router();
let User = require('../models/user.model');

// Your Challenge: Make rwo routes. Each will use mongojs methods
// to interact with your mongoDB database, as instructed below.
// You will be using express Router and Mongoose
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

// 1. get all users on record
// GET: /
// ========================================
router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.send(users)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})

// 2. add a new user
// POST /add
// ========================================
router.post('/add', async ({body}, res) => {
    try {
        const users = User.create(body)
        res.send(users)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})




module.exports = router;