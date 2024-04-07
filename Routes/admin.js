const express= require('express');

const router= express.Router();





router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/shop');
});



router.get('/aboutus', (req, res, next) => {
    console.log('about us middleware');
    res.send('<h1> about us page </h1>')
});

router.get('/add-product', (req, res, next) => {
    console.log('add product middleware');

    res.send(`<h1> download page </h1>
     </br> <form action='/admin/add-product' method='POST'>
    <input type='text' name='input' ></input>
    </br> <input type='text' name='size' ></input>
    <button type='submit'>submit</button></form>
    `)


});


module.exports= router;