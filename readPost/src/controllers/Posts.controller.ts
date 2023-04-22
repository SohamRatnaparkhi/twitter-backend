import { Request, Response } from 'express';

export const getPost = (req: Request, res: Response) => {
    res.send(`readPost of ${req.params.number} from controllers at port ${process.env.PORT}`);
}

export const getPosts = (_req: Request, res: Response) => {
    res.send(`readPosts from controllers at port ${process.env.PORT}`);
}