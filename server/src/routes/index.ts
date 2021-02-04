import {Router} from "express";
import {murmurs, like_murmur, delete_murmur, add_murmur} from "../controller/murmurs";
import {login} from "../controller/login";
import {profile, users_all_murmurs, get_all_user} from "../controller/user";

const router: Router = Router()

router.get('/api/murmurs', murmurs);

router.post('/api/murmur/like', like_murmur)

router.post('/api/murmur/delete', delete_murmur)

router.post('/api/murmur/add', add_murmur)

router.post('/api/login', login)

router.get('/api/profile', profile)

router.get('/api/user/murmurs', users_all_murmurs)

router.get('/api/users', get_all_user)

export default router;