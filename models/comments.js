const mongoose = require('mongoose');

const replySchema = new mongoose.Schema({
    text: {type: String, required: true, minlength: 5, maxlength: 1000},
    timeStamp: {type: Date, default: Date.now()},
});

const commentSchema = new mongoose.Schema({
    text: {type: String, required: true, minlength: 5, maxlength: 1000},
    videoId: {type: String, required: true},
    timeStamp: {type: Date, default: Date.now()},
    likes: {type: Number, default: 0},
    dislikes: {type: Number, default: 0},
    replies: [{type: replySchema}],
})

const Reply = mongoose.model('Reply', replySchema);
const Comment = mongoose.model('Comment', commentSchema);

//validation
function validateReply(Reply) {
    const schema = Joi.object({
    text: Joi.string().min(5).max(1000).required(),
    timeStamp: Joi.Date().Date.now().required(),
    });
    
    return schema.validate(Reply); 
}
//text: Joi.string().required().min(5).max(1000)


function validateComment(Comment) {
    const schema = Joi.object({
    text: Joi.string().min(5).max(1000).required(),
    videoID: Joi.string().required(),
    timeStamp: Joi.Date().Date.now().required(),
    dislikes: Joi.number().required(),
    likes:Joi.number().required(),
    });
    
    return schema.validate(Comment); 
}




module.exports = {
    Reply,
    Comment,
    //validateComment
     validateComment,
     validateReply,
    
    //validateReply
}

