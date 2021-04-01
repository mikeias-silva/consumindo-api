const cors = require('cors')
const express = require('express')
const app = express()


app.use(cors())

app.get('/', function (req, res) {
    return res.json([
        {
            name: "mikeias"
        },
        {
            name: "joainha"
        }
    ])
} )

app.listen('5001', function(){
    console.log("porta 5001 on")
})