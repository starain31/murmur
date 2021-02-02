import {Router} from "express";
import {murmurs} from "../controller/murmurs";
import {login} from "../controller/login";

const router: Router = Router()

router.get('/api/murmurs', murmurs);

router.post('/api/login', login)

export default router;