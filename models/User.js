const Database = require("./Database");

class User{
    constructor(){
        this.id = 0;
        this.name = "";
        this.username = "";
        this.password = "";
        this.query = "";
        this.db = new Database.Database();        
    }

    insert = ()=>{
        this.query = "INSERT INTO users(name, username, password) ";
        this.query += "VALUES('" + this.name + "', '" + this.username + "', '" + this.password + "')";
        return new Promise((resolve, reject)=>{
            this.db.query(this.query).then((result)=>{
                resolve(JSON.stringify({status:"success", data:result}));
            }, (err=>{
                reject(JSON.stringify({status:"failed", data:err}));
            }));
        });         
    }

    update = ()=>{
        this.query = "UPDATE users SET name = '" + this.name + "', ";
        this.query += "username = '" + this.username + "', ";
        this.query += "password = '" + this.password + "' ";
        this.query += "WHERE id = " + this.id;
        return new Promise((resolve, reject)=>{
            this.db.query(this.query).then((result)=>{
                resolve(JSON.stringify({status:"success", data:result}));
            }, (err=>{
                reject(JSON.stringify({status:"failed", data:err}));
            }));
        });         
    }

    delete = ()=>{
        this.query = "DELETE FROM users WHERE id = " + this.id;
        return new Promise((resolve, reject)=>{
            this.db.query(this.query).then((result)=>{
                resolve(JSON.stringify({status:"success", data:result}));
            }, (err=>{
                reject(JSON.stringify({status:"failed", data:err}));
            }));
        });         
    }

    list = ()=>{
        this.query = "SELECT * FROM users ORDER BY name";
        return new Promise((resolve, reject)=>{
            this.db.query(this.query).then((result)=>{
                resolve(JSON.stringify({status:"success", data:result}));
            }, (err=>{
                reject(JSON.stringify({status:"failed", data:err}));
            }));
        });         
    }

    get = ()=>{
        this.query = "SELECT * FROM users WHERE id = " + this.id;
        return new Promise((resolve, reject)=>{
            this.db.query(this.query).then((result)=>{
                resolve(JSON.stringify({status:"success", data:result[0]}));
            }, (err=>{
                reject(JSON.stringify({status:"failed", data:err}));
            }));
        });         
    }

    getforlogin = ()=>{
        this.query = "SELECT * FROM users WHERE username = '" + this.username + "' AND password = '" + this.password + "'";
        return new Promise((resolve, reject)=>{
            this.db.query(this.query).then((result)=>{
                resolve(result);
            }, (err=>{
                reject(err);
            }));
        });         
    }
}

module.exports = {
    User:User
}