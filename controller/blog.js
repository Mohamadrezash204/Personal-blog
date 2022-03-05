const Article = require("../models/Articles");
const User = require("../models/users");
const generalTools = require("../utils/multerArticle")
const fs = require("fs")
const path = require("path")

function create(req, res) {

    const upload = generalTools.upload.single('image');
    upload(req, res, function(err) {
        if (err) return res.send(err)

        if (!!req.body.title && !!req.body.content) {
            var NewArticle = {};
            if (req.file) {
                NewArticle.image = `/images/article/ArticlesImage/${req.file.filename}`
            }
            NewArticle.title = req.body.title
            NewArticle.content = req.body.content
            NewArticle.author = req.session.user
            Article.create(NewArticle, function(err, result) {
                if (err) return res.send({ success: false, message: err });
                if (result) {
                    res.redirect("/blog");
                    //or
                    // return res.send({ success: true, message: 'User created.' });
                }
            })
        } else {
            res.send(("وارد کردن عنوان و متن الزامی می باشد"))
        }

    })
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
    const user = req.session.user
    const DataForRender = req.session.nav;
    Article.find({ author: user }).sort({ createdAt: 'descending' }).populate('author').exec((err, articles) => {
        if (err) return res.send(err)
        if (articles.length === 0) return res.send({ masage: "you dont have any articles" })
        DataForRender.articles = articles;
        res.render('myarticles.ejs', DataForRender);
    })
}
async function deleteArticle(req, res) {
    try {
        let article = await Article.findById(req.body.id).populate('author');
        await Article.findByIdAndDelete(req.body.id)
        if (req.session.role === "user") return res.redirect("/blog/myArticles");

        if (req.session.user.role === "admin") return res.redirect("/blog");

    } catch (error) {
        res.send(error)
    }
}

function ArticleForRead(req, res) {
    const DataForRender = req.session.nav
    Article.findByIdAndUpdate(req.params.articleid, { $inc: { visitCount: 1 } }).populate('author').lean().exec(function(err, article) {
        if (err) { return res.send(err) }
        DataForRender.article = article;
        res.render("article.ejs", DataForRender)
    })
}

function uploadImage(req, res) {
    const upload = generalTools.upload.single('image');

    upload(req, res, async function(err) {
        if (err) {
            console.log(err);
            return res.status(500).json({ msg: "err" })
        }
        const id = req.params.id;
        const article = await Article.findById(id);
        // res.redirect("/dashboard")
        if (article.image === "https://www.kindpng.com/picc/m/79-792364_write-icon-symbol-design-sign-on-message-graphic.png") {
            try {
                await Article.findByIdAndUpdate(id, { image: `/images/article/ArticlesImage/${req.file.filename}` }, { new: true })
                res.redirect("/blog/myArticles")

            } catch (error) {
                console.log(err)

            }

        } else {
            try {
                fs.unlinkSync(path.join(__dirname, `../public`, article.image))
                await Article.findByIdAndUpdate(id, { image: `/images/article/ArticlesImage/${req.file.filename}` }, { new: true })
                res.redirect("/blog/myArticles")

            } catch (error) {
                console.log(err)

            }
        }

    })
}
async function SendFavorite(req, res) {
    try {
        const user = await User.findById(req.session.user._id)
        const article = await Article.find({ '_id': { $in: user.favorites } }).populate('author').lean()
        const DataForRender = req.session.nav
        DataForRender.articles = article;
        res.render("myarticles", DataForRender)

    } catch (error) {
        res.send({ msg: error.message });
    }
}
async function Favorite(req, res) {
    try {
        const article = await Article.findById(req.body.id);

        await User.findByIdAndUpdate(req.session.user._id, { "$push": { "favorites": article._id } });

    } catch (error) {
        res.send(error);

    }

}

module.exports = { editArticle, create, myArticles, deleteArticle, ArticleForRead, uploadImage, SendFavorite, Favorite }