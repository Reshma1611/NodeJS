const users = require("./users");
const express = require("express");
const app = express();
app.use(express.json());
const port = 5000;

app.get("/",(req, res) => {
    res.send("Hello World!");
});


app.get("users/:uname", (req, res) => {
    const uname = req.params.uname;
    const user = users.filter((u) => u.username === uname);

    if(user.length === 0) {
        users.push({ username: uname, password: pass, age: age}) ;
        res.json({ data: "registration successfull"});
    } else {
        res.json({data: "Sorry, username already taken"});
    }
});

app.post("/registeration", (req, res) => {
    const uname = req.body.username;
    const pass = req.body.password;
    const name = req.body.name;
    const age = req.body.age;

})
app.listen(port, () => {
    console.log("server running on port 5000");
});
