import mysql from "mysql";

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

    /*//object to xml
    static toXML(result){

    }*/

    //returns a promise of the result
    getAllArticles(){
        const con = this.#connect();
        const sql = "select * from Article";

        return new Promise((resolve) => {
            con.query(sql, (err, result) => {
                if (err) throw err;
                console.log(result);
                resolve(result);
            });
        });
    }
}
