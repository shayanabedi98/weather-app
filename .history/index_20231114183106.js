import express from 'express';
import 'dotenv/config';

app.use(express.urlencoded({ extended: true }));

const apiKey = process.env.WEATHER_API_KEY;
const app = express();
const port = 3000;

app.get('/weather', async (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/weather', async (req, res) => {
    const city = req.body.city;
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        console.log(response);
    } catch (error) {

    }
})

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});