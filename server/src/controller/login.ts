import {getRepository} from "typeorm";
import {User} from "../entity/User";

const jwt = require('jsonwebtoken');

const login = async (req: any, res: any) => {
    console.log(req.body)
    const user = await getRepository(User).findOne({where: {id: req.body.user_id}});

    console.log(user);
    // if(user) {
    //     const token = jwt.sign({id: user?.id}, 'monu', {expiresIn: 86400});
    //     return res.status(200).send({auth: true, token: token, user: user});
    // }

    // return res.status(500).send("There was a problem getting user")
    return res.send('hmmmmmmmmmmmmmmmmmmm')

}

export {login}