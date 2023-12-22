const Users = require('../../modal/User');
const router = require('express').Router();


// Check User Exist or not ---------------------------------------

router.put('/users/:email', async (req, res) => {
    try {
        const { email } = req.params;
        const userData = req.body;

        // Check if a user with the provided email already exists
        const existingUser = await Users.findOne({ email });

        if (existingUser) {
            // If user exists, send the existing user data
            return res.send(existingUser);
        }

        // If user doesn't exist, create a new user
        const newUser = new Users({ email, ...userData, timestamp: Date.now() });
        const result = await newUser.save();
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});


//Find All User by admin ------------------------------------
// router.get('/users', verifyToken, verifyAdmin, async (req, res) => {
//     try {
//         const userInfo = await Users.find();
//         res.status(201).send(userInfo)
//     } catch (error) {
//         res.status(500).send({ message: error.message })
//     }

// })






module.exports = router;


