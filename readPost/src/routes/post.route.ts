import Router from "express";
import { getPost, getPosts } from "../controllers/Posts.controller";

const router = Router();

router.use('/getPost/:number', getPost)
router.use('/getPosts', getPosts)

export default router;