const blog = require('express').Router();
const Article = require('../models/Articles')
const {
    editArticle,
    create,
    UserArticles,
    deleteArticle,
    ArticleForRead,
    uploadImage,
    Favorite,
    SendFavorite,
    addcomments,
    deleteComment
} = require('../controller/blog')
const { isAuthor, isLoggedIn, isAdmin } = require('../middlewares/auth');
const { get } = require('mongoose');
blog.get(['/', "/page/:page"], (req, res) => {
    const DataForRender = req.session.nav;
    var page = 1;
    if (req.params.page) {
        page = parseInt(req.params.page)
    }
    Article.find({}).sort({ createdAt: 'descending' }).populate('author').select("-author.password").lean()
        .skip((page - 1) * 5)
        .limit(5)
        .exec((err, articles) => {
            if (err) return logger.error(err)
            DataForRender.articles = articles;
            DataForRender.title = "Blog";
            page == 1 ? DataForRender.page1 = 1 : DataForRender.page1 = page - 1;

            DataForRender.page2 = page;

            articles.length < 5 ? DataForRender.page3 = 1 : DataForRender.page3 = page + 1;

            res.render('blog.ejs', DataForRender)
        })
})
blog.post('/create', create)
blog.route("/UserArticles").get(UserArticles).post(UserArticles)
blog.post('/deleteArticle', isAuthor, deleteArticle)
blog.post("/editArticle", isAuthor, editArticle)
blog.route("/Myfavorite").post(Favorite).get(SendFavorite);
blog.post('/uploadImage/:id', isAuthor, uploadImage)
blog.get("/:articleid", ArticleForRead)
blog.post("/:articleid/comments", isLoggedIn, addcomments)
blog.post("/:articleid/deleteComment", isAdmin, deleteComment)




module.exports = blog;