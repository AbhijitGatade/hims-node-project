var express = require("express");
const User = require("../models/User");
const router = express.Router();

router.post("/", (req, res)=>{
    let body = req.body;
    let user = new User.User();
    user.name = body.name;
    user.username = body.username;
    user.password = body.password;
    user.insert().then(result=>{
        res.end(result);
    }, err=>{
        res.end(err);
    });
});

router.put("/:id", (req, res)=>{
    let body = req.body;
    let user = new User.User();
    user.id = req.params.id;
    user.name = body.name;
    user.username = body.username;
    user.password = body.password;
    user.update().then(result=>{
        res.end(result);
    }, err=>{
        res.end(err);
    });
});

router.delete("/:id", (req, res)=>{
    let id = req.params.id;
    let user = new User.User();
    user.id = id;
    user.delete().then(result=>{
        res.end(result);
    }, err=>{
        res.end(err);
    });
});

router.get("/", (req, res)=>{
    let user = new User.User();
    user.list().then(result=>{
        res.end(result);
    }, err=>{
        res.end(err);
    });
});

router.get("/:id", (req, res)=>{
    let user = new User.User();
    user.id = req.params.id;
    user.get().then(result=>{
        res.end(result);
    }, err=>{
        res.end(err);
    });
})

module.exports = router;