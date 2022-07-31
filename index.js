const mysql = require('mysql');
const express = require('express');

const app = express();
const port = 3000;


app.get('/', (req, res) => {
    //behaviour to define
});

app.get('/getAllArticles/xml', (req, res) => {
    //retrieve then send back all articles in an xml format
});

app.get('/getAllArticles/json', (req, res) => {
    //retrieve then send back all articles in an xml format
});

app.get('/getAllArticlesGroupedByCategories/xml', (req, res) => {
    //retrieve then send back all articles grouped by categories, in an xml format
});

app.get('/getAllArticlesGroupedByCategories/json', (req, res) => {
    //retrieve then send back all articles grouped by categories, in an json format
});

app.listen(
    port,
    () => console.log(`Hello world app listening on port ${port}!`))

