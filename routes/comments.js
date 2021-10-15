const {Comment, Reply} =  require('../models/comments');
const express = require('express');
const { exist } = require('joi');
const router = express.Router();
// All module endpoints go here

router.post('/',async(req,res) => {
    try{
        const comment = new Comment ({
            text:req.body.text,
            videoId:req.body.videoId,
        });
        await comment.save();
        return res.send(comment);
    }catch(ex) {
        return res.status(500).send('Internal Server Error:${ex}');
    }
});

router.get('/:id',async (req,res) => {
    try{
        const comment = await Comment.find({videoId:req.params.videoId});
        if(!comment)
        return res.status(400).send('The comment with id"${req.params.id}"does not exist.');

        return res.send(comment);
    } catch (ex) {
        return res.status (500).send('Internal Server Error:${ex}');
    }
});

router.post('/:id',async (req,res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if(!comment)
        return res.status(400).send('The comment with id"${req.params.id}"does not exist.');
        
        const reply = await Reply.findById(req.params.videoId);
        if(!reply) return res.status(400).send('The product with id "${req.params.videoId}" does not exist ');
        comment.replies.push(reply);
        
        await comment.save();
        return res.send(comment.replies);
    }catch (ex){
            return res.status(500).send('Internal Server Error:${ex}');
    }

    
});


module.exports = router;
