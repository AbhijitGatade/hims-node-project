var express = require("express");
const Title = require("../models/Title");
const router = express.Router();

router.post("/", (req, res)=>{
    let body = req.body;
    let title = new Title.Title();
    title.name = body.name;
    title.insert().then(result=>{
        res.end(result);
    }, err=>{
        res.end(err);
    });
});

router.put("/:id", (req, res)=>{
    let body = req.body;
    let title = new Title.Title();
    title.id = req.params.id;
    title.name = body.name;
    title.update().then(result=>{
        res.end(result);
    }, err=>{
        res.end(err);
    });
});

router.delete("/:id", (req, res)=>{
    let id = req.params.id;
    let title = new Title.Title();
    title.id = id;
    title.delete().then(result=>{
        res.end(result);
    }, err=>{
        res.end(err);
    });
});

router.get("/", (req, res)=>{
    let title = new Title.Title();
    title.list().then(result=>{
        res.end(result);
    }, err=>{
        res.end(err);
    });
});

router.get("/:id", (req, res)=>{
    let title = new Title.Title();
    title.id = req.params.id;
    title.get().then(result=>{
        res.end(result);
    }, err=>{
        res.end(err);
    });
})

module.exports = router;