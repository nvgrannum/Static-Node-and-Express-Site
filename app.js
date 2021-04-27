const express = require('express');
//const https = require('https');
const { render } = require('pug');
const {projects} = require('./data.json');
const app = express();
const router = express.Router();

app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', (req, res)=> {
    const {id} = req.params;
    const project = projects[id];
    res.render('index.pug', {id, projects, project});
});

app.get('/about', (req, res) => {
    res.render('about')
});

app.get('/project/:id', (req, res) => {
    const {id} = req.params;
    const project = projects[id];
    res.render('project', {project})
});

app.use((err, req,res,next)=>{
    res.locals.error= err;

    if (res.status(404)) {
        err.status=404;
        err.message="That page does not exist :("
        return res.render('page-not-found', {err});
    } else {
        err.status=500;
        err.message="Server made an oops :( Try again"
        return res.render('error', {err});
    }

    next(err)
});


module.exports = router;
app.listen(3000); 