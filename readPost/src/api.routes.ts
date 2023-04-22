import Router from "express";

import postRoutes from "./routes/post.route";

const router = Router();

router.get('/', (_req, res) => {
    res.send(`Hello World! from api at port ${process.env.PORT}`);
});

router.get('/read', (_req, res) => {
    res.send(`Hello World! from readPost read at port ${process.env.PORT}`);
});

router.use('/read', postRoutes);

export default router;