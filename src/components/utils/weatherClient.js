import axios from 'axios'
import env from 'react-dotenv'
export default axios.create({
    baseURL:'http://localhost:3000/', 
    headers: {
        Authorization: process.env.WEATHER_KEY
    }
})