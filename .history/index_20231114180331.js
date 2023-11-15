import express from 'express';
import 'dotenv/config'

const apiKey = process.env.WEATHER_API_KEY;
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
})