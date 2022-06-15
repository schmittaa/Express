const express = require('express')
const app = express()
const path = require('path')
const date = new Date();
const d = date.getDay();
const h = date.getHours()
const PORT = process.env.PORT || 3000;

const logger = (req, res, next) => {
    if ((h< 9)||(h>17)||(d===0)||(d===6)){     
            res.sendFile(path.join(__dirname, './views/Erreur.html'));    
    }
    
    else next();
}
console.log(PORT)

app.get('/', logger, (req, res) => {

    res.sendFile(path.join(__dirname, './views/index.html'));
});

app.get('/contact', logger, (req, res) => {
    res.sendFile(path.join(__dirname, './views/contact.html'));

});

app.get('/services', logger, (req, res) => {
    res.sendFile(path.join(__dirname, './views/ourservices.html'));
});

app.get('/result', logger, (req, res) => {
    res.sendFile(path.join(__dirname, './views/Result.html'));
});


app.get('/assets/styles/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, './assets/styles/style.css'));
});
app.get('/assets/img/note.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, './assets/img/note.jpg'));
});

app.listen(PORT, () => console.log(`running on ${PORT}`));
