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


module.exports.updateAuthor = async function(req, res) {
    const author = await Author.update({
        first_name: req.body.name,
        last_name: req.body.name,
        dob: req.body.dob
    },{
        where: {
            id:req.params.id
        }
    });
    res.redirect(`/authors/profile/${req.params.id}`);
}

module.exports.renderAddForm = async function(req, res) {
    const author = {
        first_name: '',
        last_name: '',
        dob: ''
    }
    res.render('authors/add', {author});

}

module.exports.addAuthor = async function(req, res) {
    const author = await Author.create({
        first_name: req.body.name,
        last_name: req.body.name,
        dob: req.body.dob
    });
    res.redirect(`/authors/profile/${author.id}`);
}

module.exports.deleteAuthor = async function(req, res) {
    await Author.destroy({
        where: {
            id:req.params.id
        }
    });
    res.redirect('/authors');
}
