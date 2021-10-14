const {Comment} =  require('../models/comments');
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
}
catch(ex) {
    return res.status(500).send('Internal Server Error:${ex}');
}

});

router.get('/:id',async (req,res) => {
    try{
        const comment = await Comment.find(req.body.videoId);
        if(!comment)
        return res.status(400).send('The comment with id"${req.params.id}"does not exist.');

        return res.send(comment);
    } catch (ex) {
        return res.status (500).send('Internal Server Error:${ex}');
    }
});

router.put('/:id',async (req,res) => {
    try {
        const {error} = validate(req.body);
        if(error) return res.status(400).send(error);
        
        const comment = await Comment.findByIdAndUpdate(
            req.params.videoId,
            {
                text: req.body.text,
                videoId: req.body.videoId,

            },
            {new:true}
        );
   if(!comment)
   return res.status(400).send('The comment with with id "${req.params.id}" does not exist.');

   await product.save();

   return res.send(product);
        }catch (ex){
            return res.status(500).send('Internal Server Error:${ex}');
        }

    
});


