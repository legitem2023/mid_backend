

const multer = require('multer');
const path = require('path');


const userModel = require('../models/userModel');








// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving users' });
  }
};

// Get user by ID
const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.getUserById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving user' });
  }
};

// Create a new user
const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userId = await userModel.createUser(name, email, password);
    res.status(201).json({ message: 'User created', id: userId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating user' });
  }
};

const updateUser = async (req, res) => {
  const { id, name, email } = req.body;
  try {
    // Call the model function to update the user
    const result = await userModel.updateUser(id, name, email);

    // If no result is returned, it means the user was not found
    if (!result) {
      return res.status(404).json({ message: 'User not found' });
    }

    // If successful, send a success response with the updated user ID
    res.status(200).json({ message: 'User Updated', id: result.id });
  } catch (error) {
    // Log the error and send an error response
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



// Multer configuration for handling image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Set the folder where the image files will be stored
    cb(null, 'public/uploads/');
  },
  filename: (req, file, cb) => {
    // Use a unique filename by combining the current timestamp with the file extension
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });


// Image upload handler
const UploadImage = async (req, res) => {
  // Use multer to handle the file upload in the middleware
  upload.single('image')(req, res, async (err) => {
    if (err) {
      // Handle file upload errors
      return res.status(400).json({ message: 'Error uploading image', error: err.message });
    }

    // Check if a file was uploaded
    if (!req.file) {
      return res.status(400).json({ message: 'No image file uploaded' });
    }

    const { id } = req.body;
    const imagePath = req.file.path; // The path of the uploaded image

    try {
      // Save the image path in the database for the user
      const result = await userModel.UploadImage(id, imagePath);
      if (!result) {
        return res.status(404).json({ message: 'Uploading Failed!' });
      }
      res.status(200).json({ message: 'Upload Successful!', imagePath });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error saving image path in database' });
    }
  });
};


const deleteUser = async (req, res) => {
  try {
    const { id } = req.body;
    const result = await userModel.deleteUser(id);
    if (!result) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};

const SavePassword = async (req,res) =>{
  const { id, password } = req.body;
  try {
    const userId = await userModel.SavePassword(id, password);
    res.status(201).json({ message: 'Password Saved!'});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating user' });
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  UploadImage,
  SavePassword
};
