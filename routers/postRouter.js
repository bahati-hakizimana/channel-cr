const express = require('express');

const router = express.Router();

router.post('/create', (req, res) =>{
    res.json({message: "Post created successfuly"});

});


module.exports = router;