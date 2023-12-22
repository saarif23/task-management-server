const verifyToken = require('../../middlewares/verifyToken')
const Tasks = require('../../modal/Task');
const router = require('express').Router();

// Insert a new Pet by user --------------------------------------------
router.post('/tasks', verifyToken, async (req, res) => {
    try {
        const taskData = req.body
        console.log(taskData);
        const newTask = new Tasks(taskData);
        const result = await newTask.save();
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send({ message: error.message })
    }

})

router.get('/tasks', verifyToken, async (req, res) => {
    try {
        const userEmail = req.query.email;
        console.log(userEmail);
        if (!userEmail) {
            return res.status(400).send({ message: 'Email is required.' });
        }
        const userAddedTask = await Tasks.find({ user_email: userEmail })
        res.status(200).send(userAddedTask);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

module.exports = router
