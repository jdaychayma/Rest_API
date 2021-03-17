const express = require('express');
const router = express.Router();
const User = require("../Models/User");


//Path : http://localhost:5000/api/users/add
//add a user
//Public

router.post('/add', async (req, res) => {
    const { name, email } = req.body;
    try {
        const newUser = new User({
            name,
            email
        })
        const user = await newUser.save();
        res.json({ msg: "User added with Success", user });
    } catch (error) {
        console.error(error)
    }
});

//Path : http://localhost:5000/api/users/remove/_id
//delete a user
//Public

router.delete('/remove/:_id', async (req, res) => {
    const { _id } = req.params;
    try {
        const user = await User.findByIdAndDelete({ _id });
        res.json({ msg: "User Deleted with Success", user });
    } catch (error) {
        console.error(error)
    }
});

//Path : http://localhost:5000/api/users/modify/_id
//Modify a user
//Public

router.put('/modify/:_id', async (req, res) => {
    const { _id } = req.params;
    try {
        const user = await User.findByIdAndUpdate({ _id }, { $set: req.body });
        res.json({ msg: "User Deleted with Success", user });
    } catch (error) {
        console.error(error);
    }
})

//Path : http://localhost:5000/api/users/
//Display all users
//Public

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json({ msg: "This the List of All Users", users });
    } catch (error) {
        console.error(error);
    }
})

module.exports = router;