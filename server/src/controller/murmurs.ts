import {Murmur} from "../entity/Murmur";
import {getRepository, In} from "typeorm";
import {Follows} from "../entity/Follows";

const not_liked = ({user_id, murmur_id} : {user_id: string, murmur_id: string}) =>{
    return false;
}

const add_like = ({user_id, murmur_id} : {user_id: string, murmur_id: string}) => {

}

const like_murmur = (req: any, res: any) => {
    if (not_liked(req.body)) {
        add_like(req.body);
        return res.status(201).send();
    }
    return res.status(400).send();
}

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

        res.send(murmurs);

    } catch (e) {
        console.error(e);
    }
}

export {murmurs, like_murmur}