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

const port = Number(process.env.PORT) ?? 4000;
// const ipAddress = '192.168.1.13'; // IP address of the machine where you want to host the server
const ipAddress = '127.0.0.1'; // IP address of the machine where you want to host the server

app.listen(port, ipAddress, () => {
    console.log(`Server is running on ${ipAddress}:${port}`);
});