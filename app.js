let express = require("express");
let bodyparser = require("body-parser");
var jwt = require("jsonwebtoken");

var app = express();
app.use(express.json());
app.use(bodyparser.json({ limit: "50mb" }));
app.use(bodyparser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.static("public"));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    if (req.method == "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "POST, GET, PUT, PATCH, DELETE");
        return res.status(200).json({});
    }
    if(!req.headers.authorization){
        let data = {
            status: "exit",
            message:"autherization error"
        };
        res.end(JSON.stringify(data));
    }
    else if(req.path.includes("/gettoken"))
    {
        next();
    }
    else{
        try{
            const authHeader = req.headers.authorization;
            const token =  authHeader.split(' ')[1];
            //console.log(token);
            const decoded = jwt.verify(token, 'SECRETKEY');
            
            console.log(decoded);
            //next();
        }catch (err){
            let data = {
                status: "exit",
                message:"authentication error"
            };
            res.end(JSON.stringify(data));
        }
    }
    next();
});


app.get("/", (req, res)=>{
    res.end("Welcome to API");
});

app.use("/titles", require("./routes/titles"));
app.use("/users", require("./routes/users"));
app.use("/authentication", require("./routes/authentication"));

app.post("/gettoken", (req, res)=>{
    let body = req.body;
    const token = jwt.sign({
        token: body.token,
        userid: 0,
    }, 'SECRETKEY',
    { expiresIn: "365d" });
    let data = {
        status: "success",
        token: token
    };
    res.end(JSON.stringify(data));
});

app.listen(8081, ()=>{
    console.log("API running on http://localhost:8081/");
})