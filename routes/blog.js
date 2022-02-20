const blog = require('express').Router();
const Article = require('../models/Articles')

// const articles = article.find({}, (err, articles) => {
//     if (err) return logger.error(err)
//     return articles;
// })


blog.get('/', (req, res) => {
    Article.find({}).populate('author').exec((err, articles) => {
        if (err) return logger.error(err)
        res.render('blog.ejs', { articles });
        console.log(articles.length)
    })

})

blog.post('/create', function(req, res) {
    console.log(req.body);
    if (!!req.session.user) {
        if (!!req.body.title && !!req.body.content) {
            Article.create({
                    title: req.body.title,
                    content: req.body.content,
                    author: req.session.user
                },
                function(err, result) {
                    if (err) return res.send(err);
                    if (result)
                        res.redirect("home");
                    //res.send(result);
                })
        }
    } else {
        res.send((" شما وارد نشده اید برای نوشتن مقاله باید وارد شوید"))
    }
})

module.exports = blog;