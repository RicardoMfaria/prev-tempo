require("dotenv").config 
const axios = require("axios") 
const cors = require("cors") 
const express = require("express") 
const app = express() 
app.use(express.json()) 
app.use(cors()) 

const weatherClient = axios.create({
    baseURL:'https://api.openweathermap.org/data/2.5/',
    headers: {
        Authorization: process.env.WEATHER_KEY 
    }
})

app.get("/forecast", async (req, res) => {
    const query = req.query.query 
    console.log(query)
    const result = await weatherClient.get("/forecast", {params: {query}}) 
    console.log(result)
    res.json(result)
})

const port = 3000
app.listen(port, () => console.log(`Back end funcionando. Porta: ${port}.`))