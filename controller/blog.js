const Article = require("../models/Articles");
const User = require("../models/users");
const generalTools = require("../utils/multerArticle")
const fs = require("fs")
const path = require("path");
const Comment = require("../models/Comment")

function create(req, res) {

    const upload = generalTools.upload.single('image');
    upload(req, res, function(err) {
        if (err) return res.send(err)

        if (!!req.body.title && !!req.body.content) {
            var NewArticle = {};
            if (req.file) {
                NewArticle.image = `/images/article/ArticlesImage/${req.file.filename}`
            }
            NewArticle.title = req.body.title;
            NewArticle.content = req.body.content;
            NewArticle.author = req.session.user;
            NewArticle.Category = [req.body.Category];
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
                res.redirect('/blog/UserArticles')
            }
        })
}

async function UserArticles(req, res) {
    try {
        var user;
        const DataForRender = req.session.nav;
        if (req.session.user.role === "user") {
            user = req.session.user;
            DataForRender.title = `My Articles`;
        }
        if (req.session.user.role === "admin") {
            if (!!req.body.user) {
                user = await User.findById(req.body.user);
                DataForRender.title = `${user.firstName} ${user.lastName} Articles`;
            } else {
                user = req.session.user;
                DataForRender.title = `My Articles`;
            }
        }
        const articles = await Article.find({ author: user._id }).sort({ createdAt: 'descending' }).populate('author');
        if (articles.length === 0) return res.send({ masage: "you dont have any articles" })
        DataForRender.articles = articles;

        res.render('UserArticles.ejs', DataForRender);

    } catch (error) {
        res.send({ error: error })

    }
}
async function deleteArticle(req, res) {
    try {
        let article = await Article.findById(req.body.id).populate('author').populate("Comment").lean();
        if (article.image !== "https://www.kindpng.com/picc/m/79-792364_write-icon-symbol-design-sign-on-message-graphic.png")
            fs.unlinkSync(path.join(__dirname, `../public`, article.image))
        for (const comment of article.Comment) {
            await Comment.findByIdAndDelete(comment._id)
        }
        await Article.findByIdAndDelete(article._id)
        if (req.session.role === "user") return res.redirect("/blog/UserArticles");

        if (req.session.user.role === "admin") return res.redirect("/blog");

    } catch (error) {
        res.send(error)
    }
}

async function ArticleForRead(req, res) {
    try {
        const DataForRender = req.session.nav;
        DataForRender.article = await Article.findByIdAndUpdate(req.params.articleid, { $inc: { visitCount: 1 } }).populate('author').populate('Comment').lean();
        res.render("article.ejs", DataForRender)
    } catch (error) {
        res.send(error.message)

    }

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
                res.redirect("/blog/UserArticles")

            } catch (error) {
                console.log(err)

            }

        } else {
            try {
                fs.unlinkSync(path.join(__dirname, `../public`, article.image))
                await Article.findByIdAndUpdate(id, { image: `/images/article/ArticlesImage/${req.file.filename}` }, { new: true })
                res.redirect("/blog/UserArticles")

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
        if (!article) return res.send("چنین مقاله ای وجود ندارد")
        const DataForRender = req.session.nav
        DataForRender.articles = article;
        DataForRender.title = "MyFavorite";
        res.render("UserArticles", DataForRender)

    } catch (error) {
        res.send({ msg: error.message });
    }
}
async function Favorite(req, res) {
    try {
        const article = await Article.findById(req.body.id);
        if (!article) return res.send("چنیین مقاله ای وجود ندارد")

        await User.findByIdAndUpdate(req.session.user._id, { "$push": { "favorites": article._id } });
        res.json({ "success": true })

    } catch (error) {
        res.send(error);

    }

}
async function addcomments(req, res) {

    try {
        const comment = await Comment.create({ text: req.body.text, Writtenby: req.session.user._id })

        const findinarticle = await Article.findById(req.params.articleid);
        if (!!findinarticle)
            await Article.findByIdAndUpdate(req.params.articleid, { "$push": { "Comment": comment._id } })
        if (!findinarticle) await Comment.findByIdAndUpdate(req.body.id, { "$push": { "Comments": comment._id } })
        res.redirect(`/blog/${req.params.articleid}`)
    } catch (error) {
        res.send(error.message)
    }

}

async function deleteComment(req, res) {
    try {

        await Comment.findByIdAndDelete(req.body.id);
        res.redirect(`/blog/${req.params.articleid}`)

    } catch (error) {
        res.send(error.message)

    }
}

module.exports = { editArticle, create, UserArticles, deleteArticle, ArticleForRead, uploadImage, SendFavorite, Favorite, addcomments, deleteComment }