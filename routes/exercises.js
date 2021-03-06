

// API endpoints for managing exercises


const router = require('express').Router();
let Exercise = require('../models/exercise.model');

// 1. get all exercise logs on record
// GET: /
// ========================================
router.get('/', async (req, res) => {
    try {
        const exercise = await Exercise.find()
        res.send(exercise)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})

// 2. add a new exercise log
// POST: /add
// ========================================
router.post('/add', async ({body}, res) => {
    try {
        const exercise = await Exercise.create(body)
        res.send(exercise)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})
// 3. retrieve a specfic exercise log
// GET: /:id
// ========================================
router.get('/:id', async (req, res) => {
    try {
        const exercise = await Exercise.find({"_id": req.params.id})
        res.send(exercise)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})

// 4. delete a specfic exercise log
// DELETE: /:id
// ========================================
router.delete('/:id', async (req, res) => {
    try {
        const exercise = await Exercise.deleteOne({"_id": req.params.id})
        res.send(exercise)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})

// 5. retrieve a specific exercise log and update it 
// with information sent by client on req body
// POST: /update/:id
// ========================================
router.post('/update/:id', async ({params, body}, res) => {
    try {
        const exercise = await Exercise.update({"_id": params.id}, {$set: body})
        res.send(exercise)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})

module.exports = router;