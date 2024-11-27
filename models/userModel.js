const db = require('../config/db');
const bcrypt = require('bcrypt');

// Get all users
const getAllUsers = async () => {
  const [rows] = await db.execute('SELECT * FROM users');
  return rows;
};

// Get user by ID
const getUserById = async (id) => {
  const [rows] = await db.execute('SELECT * FROM users WHERE id = ?', [id]);
  return rows[0];
};

// Create a new user
const createUser = async (name, email, password) => {

    const saltRounds = 10; // Adjust this based on your security needs
    const hashedPassword = await bcrypt.hash(password, saltRounds);

  const [result] = await db.execute('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword]);
  return result.insertId;
};

const updateUser = async (id, name, email) => {
    try {
        // Prepare the SQL query with placeholders for values
        const query = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
        // Execute the query with the provided values
        const result = await db.execute(query, [name, email, id]);
        // Return the result or handle it as needed
        return result;
    } catch (error) {
        // Handle any errors that occur during the query
        console.error('Error updating user:', error);
        throw error;
    }
};

const SavePassword = async (id, password) => {
    try {
        // Generate a salt and hash the password
        const saltRounds = 10; // Adjust this based on your security needs
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Update the user's password in the database
        const query = 'UPDATE users SET password = ? WHERE id = ?'; // Removed the extra comma
        const result = await db.execute(query, [hashedPassword, id]);

        return result;
    } catch (error) {
        console.error('Error saving password:', error);
        throw error; // Re-throw the error so it can be handled by the caller
    }
};

const deleteUser = async (id) => {
    try {
        // Corrected SQL query with FROM keyword
        const query = 'DELETE FROM users WHERE id = ?';
        const result = await db.execute(query, [id]);
        // Return the result or handle it as needed
        return result;
    } catch (error) {
        // Handle any errors that occur during the query
        console.error('Error deleting user:', error);
        throw error;
    }
};

const UploadImage = async (id,image) => {
    try {
        // Prepare the SQL query with placeholders for values
        const query = 'UPDATE users SET Image=? WHERE id = ?';
        // Execute the query with the provided values
        const result = await db.execute(query, [image, id]);
        // Return the result or handle it as needed
        return result;
    } catch (error) {
        // Handle any errors that occur during the query
        console.error('Error deleting user:', error);
        throw error;
    }
};





module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  UploadImage,
  SavePassword
};
