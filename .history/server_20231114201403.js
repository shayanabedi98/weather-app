import express from 'express';
import axios from 'axios'
import 'dotenv/config';

const apiKey = process.env.WEATHER_API_KEY;
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.post('/weather', async (req, res) => {
    const city = req.body.city;
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        const temperature = response.data.main.temp
        res.render('index.ejs', {
            temp: temperature
        });
        
    } catch (error) {
        console.error('Error fetching weather data:', error);
        res.status(500).send('Error fetching weather data');
    }
})

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});