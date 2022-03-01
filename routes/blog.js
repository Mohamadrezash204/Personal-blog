const blog = require('express').Router();
const Article = require('../models/Articles')
const { editArticle, create, myArticles, deleteArticle, ArticleForRead } = require('../controller/blog')

blog.get('/', (req, res) => {
    Article.find({}).sort({ createdAt: 'descending' }).populate('author').lean().exec((err, articles) => {
        if (err) return logger.error(err)
        res.render('blog.ejs', { articles: articles });
    })
})

blog.post('/create', create)
blog.get('/myArticles', myArticles)
blog.post('/deleteArticle', deleteArticle)
blog.post("/editArticle", editArticle)
blog.get("/:articleid", ArticleForRead)

module.exports = blog;