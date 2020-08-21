const express=require('express');

const port=5000;
const app = express();

app.set('view engine', 'hbs');

app.get('/hello', (req, res) => {
    res.render('hello', {
        title:'superfly',
    });
})

app.listen(port);