const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const articleSchema = new Schema({
    title: {
        type: String,
        trim: true,
    },
    content: {
        type: String,
        trim: true,
    },
    image: {
        type: String,
        default: "https://www.kindpng.com/picc/m/79-792364_write-icon-symbol-design-sign-on-message-graphic.png"
    },
    visitCount: {
        type: Number,
        default: 0
    },
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, { timestamps: true });
module.exports = mongoose.model('Article', articleSchema);