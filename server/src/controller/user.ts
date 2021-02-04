import {getRepository, In} from "typeorm";
import {User} from "../entity/User";
import {Murmur} from "../entity/Murmur";

const profile = (req: any, res: any) => {

    console.log({id: req.query.id});
    getRepository(User)
        .findOne({id: req.query.id})
        .then(user => {
            res.send(user)
        })

}

const users_all_murmurs =  async (req: any, res: any) => {
    console.log(req.query.id)
    const murmurs: Murmur[] = await getRepository(Murmur).find({
        where: {
            user: req.query.id
        },
        relations: ['user']
    });

    res.send(murmurs);
}
export {profile, users_all_murmurs}