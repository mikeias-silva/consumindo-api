const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')

app.use(cors())




app.get('/', async function (req, res) {
    try {
        const { data } = await axios('https://jsonplaceholder.typicode.com/users')
        // console.log(response)

        // const data = response.data
        const datas = 1
        return res.json(data)
    } catch (error) {
        console.error(error)
    }




})

app.listen('5001', function () {
    console.log("porta 5001 on")
})