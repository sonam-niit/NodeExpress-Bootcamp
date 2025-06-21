const express = require('express');
const { addUser, getUserById, getAllUsers, deleteUserbyId, updateUserById, loginUser } = require('../controllers/userController');
const router = express.Router();

router.get('/', getAllUsers)
router.get("/:id",getUserById)
router.post('/', addUser)
router.delete('/:id', deleteUserbyId)
router.put('/:id', updateUserById)
router.post('/login',loginUser)

module.exports = router // export the router to use it in app.js