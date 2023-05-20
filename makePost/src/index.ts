import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/post', (_req, res) => {
    res.send(`Hello World! from makePosts at port ${process.env.Make_Post_PORT ?? 5000}`);
});

app.get('/', (_req, res) => {
    res.send(`Hello World! from makePosts at port ${process.env.Make_Post_PORT ?? 5000}`);
});

app.listen(process.env.Make_Post_PORT ?? 5000, () => {
    console.log(`Make post service is running on port ${process.env.Make_Post_PORT ?? 5000}`);
});
