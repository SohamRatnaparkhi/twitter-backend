import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
    res.send(`Hello, world from read post at port ${process.env.PORT ?? 5000}!`);
})

app.listen(process.env.PORT ?? 5000, () => {
    console.log(`Server started at port ${process.env.PORT ?? 5000}`);
})

