import mysql from "mysql";
import categories from "../constants.js";

export class ArticleDAO{

    #connect(){
        const con = mysql.createConnection({
            host: "localhost",
            user: "mglsi_user",
            password: "passer",
            database: "mglsi_news"
        });

        con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
        });

        return con;
    }

    #executeQuery(query){
        const con = this.#connect();

        return new Promise((resolve) => {
            con.query(query, (err, result) => {
                if (err) throw err;
                resolve(result);
            });
        });
    }


    /*//object to xml
    static toXML(result){

    }*/

    //returns a promise of the result -- which is an array of objects,
    //each representing an article
    getAllArticles(){
        const sql = "select * from Article";

        return this.#executeQuery(sql);
    }

    getAllArticlesByCategoryId(categoryId){
        const value = eval(categoryId);
        const sql = "select * from Article where categoryId = " + mysql.escape(value);

        return this.#executeQuery(sql);
    }

    getAllArticlesByCategoryName(categoryName){
        const sql = "select * from Article where categoryId = (" +
            "select id from Category where label = " + mysql.escape(categoryName) + " limit 1)";

        return this.#executeQuery(sql);
    }

    async getAllArticlesGroupedByCategory() {
        let result = [];

        for (const key in categories) {
            if (categories.hasOwnProperty(key)) {
                    await this.getAllArticlesByCategoryId(eval(key))
                        .then(articles => {
                            const categoryName = categories[key];
                            const ob = {};

                            ob[`${categoryName}`] = articles;
                            result.push(ob);
                        });
                }
        }
        return new Promise((resolve) => {
            resolve(result);
        });
    }

}
