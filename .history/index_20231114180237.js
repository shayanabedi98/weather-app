import express from 'express';
import 'dotenv/config'

const apiKey = process.env.WEATHER_API_KEY;
const app = express();