import mysql from "mysql";

class ArticleDAO{

    #connect(){
        const con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "qsdfjklm"
        });

        con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
        });

        return con;
    }

    getAllArticles(){
        const con = this.#connect();
        const sql = "select * from Article.js";

        con.query(sql, function (err, result) {
            if (err) throw err;
            //faire traitement avec result
        });
    }
}
