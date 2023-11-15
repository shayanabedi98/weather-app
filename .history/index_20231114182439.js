import express from 'express';
import 'dotenv/config'

app.use(express.urlencoded({ extended: true }));

const apiKey = process.env.WEATHER_API_KEY;
const app = express();
const port = 3000;

app.get('/weather', async (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
})