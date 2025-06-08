require("dotenv").config ()
const axios = require("axios") 
const cors = require("cors") 
const express = require("express") 
const app = express() 
app.use(express.json()) 
app.use(cors()) 

const weatherClient = axios.create({
    baseURL:'https://api.openweathermap.org/data/2.5/',
})

app.get("/forecast", async (req, res) => {
    
    const query = req.query.city 

    console.log(`Requisição recebida para a cidade: ${query}`);

    console.log(query)

    const result = await weatherClient.get("/forecast", {
        params: {
            q:query,
            appid: process.env.WEATHER_KEY,
            units: 'metric',
            lang: 'pt_br'
    }}) 

    const previsoes = result.data.list.map(previsao => {
        return {
            temperaturaMinima: previsao.main.temp_min,
            temperaturaMaxima: previsao.main.temp_max,
            umidadeRelativaAr: previsao.main.humidity,
            nomeIconeIlustrativo: previsao.weather[0].icon, 
            descricao: previsao.weather[0].description,     
        };
    });

    res.json({
        cidade: result.data.city.name,
        pais: result.data.city.country,
        previsoes: previsoes
    });

})

const port = 3000
app.listen(port, () => console.log(`Back end funcionando. Porta: ${port}.`))