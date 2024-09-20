let express = require('express');
let router = express.Router(); // Create a router object
let mongoose = require('mongoose');

// Create a reference to the model
let Book = require('../models/book');

// GET Route for the Book List page - READ Operation
router.get('/', async (req, res, next) => {
    try {
        // Use await to handle the find operation as a promise
        const bookList = await Book.find(); // Find all the books in the books collection
        res.render('book', {
            title: 'Book List',
            bookList: bookList, // Pass the book list to the template
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred while fetching the book list'); // Send an error response
    }
});

module.exports = router;

