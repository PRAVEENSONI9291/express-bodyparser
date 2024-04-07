// const http = require('http');


const express = require('express');
const bodyparser = require('body-parser');

//body parser is used to parse the input text so that handling could be done


const app = express();

app.use(bodyparser.urlencoded({ extended: true }));

app.post('/pages', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});



app.use('/aboutus', (req, res, next) => {
    console.log('about us middleware');
    res.send('<h1> about us page </h1>')
});

app.use('/add-product', (req, res, next) => {
    console.log('add product middleware');
    // res.send('<form action='/downloads/pages' method='POST'><input type='text' ><button type='submit'>submit</button></input></form>')
    res.send(`<h1> download page </h1>
     </br> <form action='/pages' method='POST'>
    <input type='text' name='input' ></input>
    </br> <input type='text' name='size' ></input>
    <button type='submit'>submit</button></form>
    `)


});

app.use('/', (req, res, next) => {
    console.log('homepage middleware');
    res.send('<h1> home page </h1>')
});


app.listen(3000);
