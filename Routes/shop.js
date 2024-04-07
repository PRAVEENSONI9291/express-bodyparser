const express= require('express');

const router= express.Router();



router.get('/', (req, res, next) => {
    console.log('homepage middleware');
    res.send('<h1> home page </h1>')
});



module.exports= router;