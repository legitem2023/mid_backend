const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Route to get all users
router.get('/users', userController.getAllUsers);

// Route to get a user by ID
router.get('/users/:id', userController.getUserById);

// Route to create a new user
router.post('/createUser', userController.createUser);

router.post('/userupdate',userController.updateUser)

router.post('/deleteuser',userController.deleteUser);

router.post('/uploadImage', userController.UploadImage);

router.post('/SavePassword', userController.SavePassword);


module.exports = router;
