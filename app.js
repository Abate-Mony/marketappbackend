const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json());
var bodyParser = require('body-parser')
const users = [{
        name: "rose mary",
        age: 20
    }, {
        name: "ako bate emmanuel",
        age: 22
    },
    {
        name: "susan ako",
        age: 19
    },
]
app.use(cors())

app.get('/', function(req, res) {
    res.json({ users: users })
})
app.get("/d", (req, res) => {
        // res.download("./files/index.js")
        // res.send("./files/Dragon.mp3")
        // res.links("./files/Dragon.mp3")
        // res.sendFile("./files/Dragon.mp3")
        // res.redirect('www.google.com')
        res.sendStatus(200)
    })
    // app.use(bodyParser.urlencoded({ extended: true }));
    // const corsOptions = {
    //     origin: '*',
    //     credentials: true, //access-control-allow-credentials:true
    //     optionSuccessStatus: 200,
    // }

app.listen(5000, () => { console.log("5000") })