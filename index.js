


const express = require('express');
const bodyparser = require('body-parser');

//body parser is used to parse the input text so that handling could be done

const adminRoutes= require('./Routes/admin');
const shopRoutes= require('./Routes/shop');




const app = express();

app.use(bodyparser.urlencoded({ extended: true }));



app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);

app.use((req, res, next)=>{
    res.status(404).send('<h1>page not found</h1>')
});


app.listen(3000);
