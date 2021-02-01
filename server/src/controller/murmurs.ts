import {Murmur} from "../entity/Murmur";
import {getRepository} from "typeorm";

const murmurs = async (req: any, res: any) => {
    try {
        const page: number = Number(req.query.page as string);

        const murmurs: Murmur[] = await getRepository(Murmur).find({
            skip: 10 * (page - 1),
            take: 10,
            relations: ['user']
        });

        res.send(murmurs.map(murmur => {
            return {
                text: murmur.text,
                like: murmur.like,
                user: murmur.user.name
            }
        }))

    } catch (e) {
        console.error(e);
    }
}

export {murmurs}