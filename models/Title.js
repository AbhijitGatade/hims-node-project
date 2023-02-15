const Database = require("./Database");

class Title{
    constructor(){
        this.id = 0;
        this.name = "";
        this.query = "";
        this.db = new Database.Database();        
    }

    insert = ()=>{
        this.query = "INSERT INTO titles(name) ";
        this.query += "VALUES('" + this.name + "')";
        return new Promise((resolve, reject)=>{
            this.db.query(this.query).then((result)=>{
                resolve(JSON.stringify({status:"success", data:result}));
            }, (err=>{
                reject(JSON.stringify({status:"failed", data:err}));
            }));
        });         
    }

    update = ()=>{
        this.query = "UPDATE titles SET name = '" + this.name + "' WHERE id = " + this.id;
        return new Promise((resolve, reject)=>{
            this.db.query(this.query).then((result)=>{
                resolve(JSON.stringify({status:"success", data:result}));
            }, (err=>{
                reject(JSON.stringify({status:"failed", data:err}));
            }));
        });         
    }

    delete = ()=>{
        this.query = "DELETE FROM titles WHERE id = " + this.id;
        return new Promise((resolve, reject)=>{
            this.db.query(this.query).then((result)=>{
                resolve(JSON.stringify({status:"success", data:result}));
            }, (err=>{
                reject(JSON.stringify({status:"failed", data:err}));
            }));
        });         
    }

    list = ()=>{
        this.query = "SELECT * FROM titles ORDER BY id";
        return new Promise((resolve, reject)=>{
            this.db.query(this.query).then((result)=>{
                resolve(JSON.stringify({status:"success", data:result}));
            }, (err=>{
                reject(JSON.stringify({status:"failed", data:err}));
            }));
        });         
    }

    get = ()=>{
        this.query = "SELECT * FROM titles WHERE id = " + this.id;
        return new Promise((resolve, reject)=>{
            this.db.query(this.query).then((result)=>{
                resolve(JSON.stringify({status:"success", data:result[0]}));
            }, (err=>{
                reject(JSON.stringify({status:"failed", data:err}));
            }));
        });         
    }
}

module.exports = {
    Title:Title
}