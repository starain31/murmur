import {getRepository} from "typeorm";
import {User} from "../entity/User";

const login = async (req: any, res: any) => {
    const user = await getRepository(User).findOne({where: {emil: req.body.user_id}});
    console.log(user);
    res.send({message: 'Log in successful'})
}

export {login}