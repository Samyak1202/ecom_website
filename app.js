const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req,res) => {
    res.send("Ecommerce Website !")
})
app.get('/home', (req,res) => {
    res.render('home');
})

app.listen(3000, () => {
    console.log("Serving on port 3000");
})