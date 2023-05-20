import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './api.routes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

const port = Number(process.env.Read_post_PORT) ?? 5001;
// const ipAddress = '192.168.1.13'; // IP address of the machine where you want to host the server
// const ipAddress = '127.0.0.1'; // IP address of the machine where you want to host the server

app.get('/', (_req, res) => {
    res.send(`Hello World! from readPost at port ${port}`);
})

app.listen(port, () => {
    console.log(`Read post service is running on port ${port}`);
});