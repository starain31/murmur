import {getRepository} from "typeorm";
import {User} from "../entity/User";
import {Request} from 'express';
import {Auth} from "../entity/auth";

const jwt = require('jsonwebtoken');

const secret = 'SSSSSSSSSS';

const login = async (req: any, res: any) => {
    try {
        await getRepository(Auth).findOneOrFail({
            user_id: req.body.user_id, password: req.body.password
        });

        return res.status(200).send({
            auth: true,
            token: jwt.sign({id: req.user_id}, secret, {expiresIn: 86400})
        });

    } catch (e) {
        return res.status(500).send("There was a problem getting user")
    }


}

const user = async (req: Request, res: any) => {
    try {
        const payload = await jwt.verify(req.header('Authorization'), secret);
        console.log({payload});

        const user = await getRepository(User).findOneOrFail(payload.id);

        console.log({user});
        return res.send({user});
    } catch (e) {
        console.error(e);
    }


}

export {login, user}