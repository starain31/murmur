import {Router} from "express";
import {murmurs, like_murmur} from "../controller/murmurs";
import {login} from "../controller/login";

const router: Router = Router()

router.get('/api/murmurs', murmurs);

router.post('/api/murmur/like', like_murmur)

router.post('/api/login', login)

export default router;