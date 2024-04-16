const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
const cors = require('cors'); 
const path = require('path'); 

const bookRoutes = require('./routes/books'); // Import book routes
const userName = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const app = express();

// Connect to MongoDB database
mongoose.connect(`mongodb+srv://${userName}:${password}@cluster0.siv66b2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true, // For creating indexes efficiently
  useFindAndModify: false // To disable deprecated methods
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Configure middleware
app.use(bodyParser.json()); // Parse incoming JSON requests
app.use(cors()); // Enable CORS (adjust origins if needed)

// Define routes
app.use('/api/books', bookRoutes); // Use book routes for `/api/books` path

// Serve static files in production (optional)
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static(path.join(__dirname, 'public')));

  // Handle any other route with index.html (assuming React in frontend)
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
}

const port = process.env.PORT || 5000; // Use environment variable for port or default to 5000

app.listen(port, () => console.log(`Server listening on port ${port}`));