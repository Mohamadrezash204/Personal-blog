const Article = require("../models/Articles");


function create(req, res) {
    if (!!req.body.title && !!req.body.content) {
        Article.create({
                title: req.body.title,
                content: req.body.content,
                author: req.session.user
            },
            function(err, result) {
                if (err) return res.send(err);
                if (result)
                    res.redirect("/blog");
                //res.send(result);
            })
    } else {
        res.send((" شما وارد نشده اید برای نوشتن مقاله باید وارد شوید"))
    }
}

function editArticle(req, res) {
    let editarticle = {}
    req.body.title ? editarticle.title = req.body.title : null;
    req.body.content ? editarticle.content = req.body.content : null;

    Article.findByIdAndUpdate(req.body._id, editarticle,
        function(err, docs) {
            if (err) {
                console.log(err)
            } else {
                res.redirect('/blog/myArticles')
            }
        })
}

function myArticles(req, res) {
    const user = req.session.user._id

    Article.find({ author: user }).sort({ createdAt: 'descending' }).populate('author').exec((err, articles) => {
        if (err) return res.send(err)
        if (articles.length === 0) return res.send({ masage: "you dont have any articles" })
        res.render('myarticles.ejs', { articles: articles });
    })
}
async function deleteArticle(req, res) {
    try {
        await Article.findByIdAndDelete(req.body.id)
        res.redirect("/blog/myArticles")
    } catch (error) {
        res.send(error)
    }
}

function ArticleForRead(req, res) {
    Article.findByIdAndUpdate(req.params.articleid, { $inc: { visitCount: 1 } }).populate('author').lean().exec(function(err, article) {
        if (err) { return res.send(err) }
        res.render("article.ejs", { article: article })
    })
}



module.exports = { editArticle, create, myArticles, deleteArticle, ArticleForRead }