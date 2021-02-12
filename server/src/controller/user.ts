import {getRepository} from "typeorm";
import {User} from "../entity/User";
import {Murmur} from "../entity/Murmur";
import {Follows} from "../entity/Follows";

const profile = (req: any, res: any) => {
    getRepository(User)
        .findOne({id: req.query.id})
        .then(user => {
            res.send(user)
        })

}

const users_all_murmurs = async (req: any, res: any) => {
    const murmurs: Murmur[] = await getRepository(Murmur).find({
        where: {
            user: req.query.id
        },
        relations: ['user']
    });

    res.send(murmurs);
}

const get_all_user = (req: any, res: any) => {
    getRepository(User).find().then((users) => {
        res.send(users);
    })
}

const follow_user = async (req: any, res: any) => {
    Promise.all([
        getRepository(Follows).insert({
            following: req.body.following_id,
            follower: req.body.follower_id
        }),

        getRepository(User).increment(
            {id: req.body.following_id},
            'number_of_followers',
            1
        ),

        getRepository(User).increment(
            {id: req.body.follower_id},
            'number_of_followings',
            1
        ),

    ]).then(() => {

    }).catch((e) => {
        console.log(e);
        res.send(`Error`)
    })
}

export {profile, users_all_murmurs, get_all_user, follow_user}