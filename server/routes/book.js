let express = require('express');
let router = express.Router(); // Create a router object
let mongoose = require('mongoose');

// Create a reference to the model
let Book = require('../models/book');

// GET Route for the Book List page - READ Operation
router.get('/', async (req, res, next) => {
    try {const bookList = await Book.find(); // Find all the books in the books collection
        res.render('book/list', {title: 'Books',bookList: bookList}); // Pass the book list to the template
        
    } 
    catch (err) {
        console.error(err);
        res.status(500).send('An error occurred while fetching the book list'); // Send an error response
    }
});

/*get route for displaying the add page -CREATE Operation */
router.get('/add', (req, res, next) => {
    res.render('book/add', {title: 'Add book',bookList: bookList});// Pass the book list to the template
    });


/*POST route for processing the add page -CREATE Operation */
router.post('/add', async (req, res, next) => {
    let newBook = Book({  // Create a new book object using book model
        "name": req.body.name,
        "author": req.body.author,
        "published": req.body.published,
        "description": req.body.description,
        "price": req.body.price
    });

Book.create(newBook, (err, Book) => { // Save the new book object to the database
    if(err)
        {
        console.log(err);
        res.end(err);
    }
    else
    {
        res.redirect('/book-list');// Refresh the book list
    }
});
});


/*get route for displaying the edit page -UPDATE Operation */
router.get('/edit/:id', async (req, res, next) => {

    let id = req.params.id; // Get the id from the request

    Book.findById(id, (err, bookToEdit) => { // Find the book by id
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            // Show the edit view
            res.render('book/edit', {title: 'Edit Book', book: bookToEdit}); 
        }
    });

});
/*get route for processing the edit page -UPDATE Operation */
router.post('/edit/:id', async (req, res, next) => {

    let id = req.params.id; // Get the id from the request

    let updatedBook = Book({ // Create a new book object using book model
        "_id": id,
        "name": req.body.name,
        "author": req.body.author,
        "published": req.body.published,
        "description": req.body.description,
        "price": req.body.price
    });

    Book.updateOne({_id: id }, updatedBook, (err) => { // Update the book object
        if(err){
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/book-list'); // Refresh the book list
        }
    });

});
/*get route to perform deletion -DELETE Operation */
router.get('/delete/:id', async (req, res, next) => {

let id = req.params.id; // Get the id from the request

Book.remove({_id: id}, (err) => { // Delete the book by id
    if(err){
        console.log(err);
        res.end(err);
    }
    else
    {
        res.redirect('/book-list'); // Refresh the book list
    }
});
});

module.exports = router;
