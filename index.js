import {ArticleDAO} from "./dao/ArticleDAO.js"
import { json2xml } from "xml-js";

import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    //behaviour to define
    const dao = new ArticleDAO();

    dao.getAllArticles()
        .then(result => {
        res.send({code: 200, 'articles': result});
    });
});

app.get('/getAllArticles/xml', (req, res) => {
    //retrieve then send back all articles in an xml format
    const dao = new ArticleDAO();

    dao.getAllArticles()
        .then(result => {
            res.send({code: 200, 'articles':
                dao.jsonToXml(result)
            });
        });
});

app.get('/getAllArticles/json', (req, res) => {
    //retrieve then send back all articles in a json format
    const dao = new ArticleDAO();

    dao.getAllArticles()
        .then(result => {
            res.send({code: 200, 'articles': result});
        });
});



app.get('/getAllArticlesByCategoryId/xml', (req, res) => {
    //retrieve then send back all articles of the specified category in an xml format
    const dao = new ArticleDAO();
    const categoryId = req.query.categoryId;

    dao.getAllArticlesByCategoryId(categoryId)
        .then(result => {
            res.send({code: 200, 'articles':
                    dao.jsonToXml(result)
            });
        });
});

app.get('/getAllArticlesByCategoryId/json', (req, res) => {
    //retrieve then send back all articles of the specified category in a json format
    const dao = new ArticleDAO();
    const categoryId = req.query.categoryId;

    dao.getAllArticlesByCategoryId(categoryId)
        .then(result => {
            res.send({code: 200, 'articles': result});
        });
});



app.get('/getAllArticlesByCategoryName/xml', (req, res) => {
    //retrieve then send back all articles of the specified category in an xml format
    const dao = new ArticleDAO();
    const categoryName = req.query.categoryName;

    dao.getAllArticlesByCategoryName(categoryName)
        .then(result => {
            res.send({code: 200, 'articles':
                    dao.jsonToXml(result)
            });
        });
});

app.get('/getAllArticlesByCategoryName/json', (req, res) => {
    //retrieve then send back all articles of the specified category in a json format
    const dao = new ArticleDAO();
    const categoryName = req.query.categoryName;

    dao.getAllArticlesByCategoryName(categoryName)
        .then(result => {
            res.send({code: 200, 'articles': result});
        });
});



app.get('/getAllArticlesGroupedByCategory/xml', (req, res) => {
    //retrieve then send back all articles grouped by category, in an xml format
    const dao = new ArticleDAO();

    dao.getAllArticlesGroupedByCategory()
        .then(result => {
            res.send({code: 200, 'articles':
                    dao.jsonToXml(result)
            });
        });
});

app.get('/getAllArticlesGroupedByCategory/json', (req, res) => {
    //retrieve then send back all articles grouped by category, in a json format
    const dao = new ArticleDAO();

    dao.getAllArticlesGroupedByCategory()
        .then(result => {
           res.send({code: 200, 'artcicles': result});
        });
});


app.listen(
    port,
    () => console.log(`Hello world app listening on port ${port}!`))
