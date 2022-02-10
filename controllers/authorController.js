const {Author} = require('../models');

module.exports.viewAll = async function(req, res) {
    const author = await Author.findAll();
    res.render('authors/view_all', {author});
}

module.exports.viewProfile = async function(req, res) {
    const author = await Author.findByPk(req.params.id, {
        include: 'books'
    });
    res.render('authors/profile', {author});
}

module.exports.renderEditForm = async function(req, res) {
    const author = await Author.findByPk(req.params.id);
    res.render('authors/edit', {author});
}