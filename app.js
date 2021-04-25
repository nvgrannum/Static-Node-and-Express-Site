const express = require('express');
//const https = require('https');
const { render } = require('pug');
const {data} = require('./data.json');
const app = express();
const router = express.Router();

app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', (req, res)=> {
    //text
    res.render('index.pug');
});

app.get('/about', (req, res) => {
    res.render('about')
});

app.get('/project/:id', (req, res) => {
    const {id} = req.params;
    const {projects} = data
    res.render('project', {id, projects})
});

app.listen(3000); 