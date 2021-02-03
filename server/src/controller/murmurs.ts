import {Murmur} from "../entity/Murmur";
import {getRepository, In} from "typeorm";
import {Follows} from "../entity/Follows";

const murmurs = async (req: any, res: any) => {
    try {
        const page: number = Number(req.query.page as string);

        const follows = await getRepository(Follows).find({
            where: {
                follower: req.query.user_id
            },
            relations: ['following']
        });

        console.log(follows.map(follow => follow.following.id));

        const murmurs: Murmur[] = await getRepository(Murmur).find({
            where: {
                user: In(follows.map(follow => follow.following.id))
            },
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