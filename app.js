const express = require('express');
const { render } = require('pug');
const {projects} = require('./data.json');
const app = express();
const router = express.Router();

app.set('view engine', 'pug');
app.use('/static',express.static('public'));

app.get('/', (req, res)=> {
    const {id} = req.params;
    const project = projects[id];
    res.render('index.pug', { projects, project});
});

app.get('/about', (req, res) => {
    res.render('about')
});

//feeds each project from the data.json file to an individual project page
app.get('/project/:id', (req, res) => {
    const {id} = req.params;
    const project = projects[id];
    res.render('project', {project})
});

//redirects the user to the homepage if the project number gets deleted since homepage has list of all projects.
app.get('/project', (req,res) =>{
    res.redirect('/');
})

app.get('/error', (req,res)=>{
    const err = new Error('500s')
    err.status=500;
    next(err);
})

app.use((req,res,next)=>{
    const err = new Error("Page not found :(");
    err.status=404;
    next(err)   
});

app.use((err, req,res,next)=>{
    res.locals.error= err;

    if (err.status ===404) {
        res.status(err.status);
        err.message="That page does not exist :("
        console.log(err.message);
        return res.render('page-not-found', {err});
    } else {
        err.status = 500;
        res.status(err.status);
        err.message="Server made an oops :( Try again"
        console.log(err.message);
        return res.render('error', {err});
    }

    next(err)
});



module.exports = router;
app.listen(3000); 