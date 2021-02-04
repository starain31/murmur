import {Murmur} from "../entity/Murmur";
import {getConnection, getManager, getRepository, In} from "typeorm";
import {Follows} from "../entity/Follows";
import {UserLikes} from "../entity/UserLikes";

const liked = async ({user_id, murmur_id}: { user_id: string, murmur_id: string }) => {
    return (await getRepository(UserLikes).findOne({
        where: {
            murmur: murmur_id,
            user: user_id
        }
    }) !== undefined);
}

const add_like = async ({user_id, murmur_id}: { user_id: string, murmur_id: string }) => {
    return getRepository(UserLikes).insert({
        // @ts-ignore
        user: user_id, murmur: murmur_id
    })
}

async function increase_like(id: number) {
    try {
        await getRepository(Murmur).increment({id}, "like", 1);
    } catch (e) {
        console.error(e);
    }
}

const like_murmur = async (req: any, res: any) => {
    if (await liked(req.body)) {
        return res.status(400).send();
    }
    await add_like(req.body);
    await increase_like(req.body.murmur_id);
    return res.status(201).send();
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