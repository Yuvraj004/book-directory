const express = require('express');
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');

const cors = require('cors');
const path = require('path');
const bookRoutes = require('./routes/bookRoutes');
const app = express();

const uri = 'mongodb+srv://yuvrajchat:2PpBXBn7BM30v5PK@cluster0.siv66b2.mongodb.net/';

mongoose.connect(uri)
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err);
});


app.use(express.json());
app.use(cors());

app.use('/books', bookRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'public')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server listening on port ${port}`));