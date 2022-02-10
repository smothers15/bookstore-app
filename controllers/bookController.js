const {Book} = require('../models');
const genres = ['Fiction', 'Fantasy', 'Adventure', 'Dystopian'];

module.exports.viewAll = async function(req, res) {
    const books = await Book.findAll();
    res.render('books/view_all', {books});
}

module.exports.viewProfile = async function(req, res) {
    const books = await Book.findByPk(req.params.id, {
        include:'authors'
    });
    res.render('books/profile', {books});
}

module.exports.renderEditForm = async function(req, res) {
    const book = await Book.findByPk(req.params.id);
    res.render('books/edit', {book, genres});
}

module.exports.updateBook = async function(req, res) {
    const book = await Book.update({
        title: req.body.title,
        genre: req.body.genre,
        page_number: req.body.page_number,
        publisher: req.body.publisher,
        cover: req.body.cover,
        description: req.body.description
    },{
        where: {
            id:req.params.id
        }
    });
    res.redirect(`/books/profile/${req.params.id}`);
}