const blog = require('express').Router();
const Article = require('../models/Articles')
const { isLoggedIn } = require('../middlewares/auth')
const { editArticle, create, myArticles } = require('../controller/blog')

blog.get('/', (req, res) => {
    Article.find({}).sort({ createdAt: 'descending' }).populate('author').lean().exec((err, articles) => {
        if (err) return logger.error(err)
        res.render('blog.ejs', { articles: articles });
    })
})

blog.post('/create', isLoggedIn, create)
blog.get('/myArticles', isLoggedIn, myArticles)
blog.post("/editArticle", isLoggedIn, editArticle)

module.exports = blog;