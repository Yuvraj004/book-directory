const express = require('express');
const bookController = require('../controllers/bookController');

const router = express.Router();

router.post('/createBook', bookController.createBook);
router.get('/getBooks', bookController.getBooks);
router.get('/getBook/:id', bookController.getBookById);
router.put('/updateBook/:id', bookController.updateBook);
router.delete('deleteBook/:id',bookController.deleteBook);
