import {Router} from "express";
import {Murmurs} from "../entity/Murmurs";
import {createConnection, getRepository} from "typeorm";


const connection = createConnection();

const router: Router = Router()

router.get('/api/murmurs', async (req, res) => {
    try {
        const page: number = Number(req.query.page as string);

        const murmurs = await getRepository(Murmurs).find({
            skip: 10 * (page - 1),
            take: 10,
        });
        console.log(murmurs)
        res.send(murmurs)
    } catch (e) {
        console.error(e);
    }
});

export default router;