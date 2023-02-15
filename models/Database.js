let mysql = require('mysql');

class Database{
    constructor(){
        this.con = mysql.createConnection({
            host:"localhost",
            user:"root",
            password:"",
            database:"hims"    
        });
    }

    query = (sql, promise)=>{
        return new Promise((resolve, reject)=>{
            this.con.query(sql, promise, (err, result)=>{
                if(err)
                    reject(err);
                resolve(result);
            }); 
        });
    }
}

module.exports = {
    Database:Database
}