const {Book} = require('../models')

module.exports.viewAll = async function(req, res) {
    const books = await Book.findAll();
    res.render('books/view_all', {books});
}

module.exports.viewProfile = async function(req, res) {
    const books = await Book.findByPk(req.params.id);
    res.render('books/profile', {books});
}