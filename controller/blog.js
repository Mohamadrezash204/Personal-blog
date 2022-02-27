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
        // Article.findOne({ author: user }, function(err, articles) {
        //     if (err) return res.send(err)
        //     if (articles.length === 0) return res.send({ masage: "you dont have any articles" })
        //     res.render('blog.ejs', { articles: articles })
        // })
    Article.find({ author: user }).sort({ createdAt: 'descending' }).populate('author').exec((err, articles) => {
        if (err) return res.send(err)
        if (articles.length === 0) return res.send({ masage: "you dont have any articles" })
        res.render('myarticles.ejs', { articles: articles });
    })
}





module.exports = { editArticle, create, myArticles }