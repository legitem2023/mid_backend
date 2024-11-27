const express = require('express');
const cors = require('cors');  // Import the cors package
const userRoutes = require('./routes/userRoutes');
const bodyParser = require('body-parser');
const app = express();
const path = require('path'); // Import path module for resolving file paths

// Middleware
app.use(cors());  // Enable CORS for all origins (you can specify options for restrictions)
app.use(bodyParser.json());  // Parse incoming JSON requests

// Maps the /public URL path to the local public folder
app.use('/public', express.static(path.join(__dirname, 'public'))); 

// Routes
app.use('/api', userRoutes);

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
