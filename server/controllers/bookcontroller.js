const Book = require('../models/book');

// Create a book
exports.createBook = async (req, res) => {
  // Use body-parser or access req.body directly for data
  const { title, author, publishedYear } = req.body;
  try {
    const newBook =  new Book({ title, author, publishedYear });
    await newBook.save();
    console.log("Book Inserted");
    res.json(newBook).status(200);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

// Get all books
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books).status(200);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a book by ID
exports.getBookById = async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book).status(200);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a book by ID
exports.updateBook = async (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  try {
    const book = await Book.findByIdAndUpdate(id, updates, { new: true });
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book).status(200);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a book by ID
exports.deleteBook = async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json({ message: 'Book deleted' }).status(200);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
