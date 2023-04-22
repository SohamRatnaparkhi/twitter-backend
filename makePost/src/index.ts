import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/post', (_req, res) => {
    res.send(`Hello World! from makePosts at port ${process.env.PORT ?? 5000}`);
});

app.listen(process.env.PORT ?? 5000, () => {
    console.log(`makePosts is running on port ${process.env.PORT ?? 5000}`);
});
