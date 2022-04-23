const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CommentSchema = new Schema({
    text: {
        type: String,
        required: true,
        trim: true
    },
    Comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    Writtenby: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
}, { timestamps: true });

CommentSchema.pre(/^find/, function(next) {
    this.populate('Writtenby').populate({ path: 'Comments', populate: { path: 'Writtenby' } });
    next();
});

module.exports = mongoose.model('Comment', CommentSchema);