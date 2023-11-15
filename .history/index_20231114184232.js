import express from 'express';
import axios from 'axios'
import 'dotenv/config';
import path from "path"

const __dirname = path.resolve();
const apiKey = process.env.WEATHER_API_KEY;
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/weather', async (req, res) => {
    const city = req.body.city;
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        const temp = response.data.temp - 273.15;
        document.querySelector('h2').addEventListener('click', () => {
            this.innerHTML = temp
        })
    } catch (error) {
        console.error('Error fetching weather data:', error);
        res.status(500).send('Error fetching weather data');
    }
})

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});