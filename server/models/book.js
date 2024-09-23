let mongoose = require('mongoose');

//create a model class defining the schema created in mongodb
let bookModel = mongoose.Schema({
    name: String,
    Author: String,
    Published: String,
    description: String,
    price: Number

},
{
    collection: "books"
});

module.exports = mongoose.model('Book', bookModel);//export the model(book.js) to be used in other files