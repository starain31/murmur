import {Router} from "express";
import {murmurs} from "../controller/murmurs";

const router: Router = Router()

router.get('/api/murmurs', murmurs);

export default router;