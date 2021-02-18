import {getRepository} from "typeorm";
import {User} from "../entity/User";
import {Request, Response} from 'express';
import {Auth} from "../entity/auth";
import jwt from "jsonwebtoken";

const login = async (req: any, res: any) => {
    try {
        await getRepository(Auth).findOneOrFail({
            user_id: req.body.user_id, password: req.body.password
        });

        return res.status(200).send({
            auth: true,
            token: jwt.sign(
                {id: req.body.user_id},
                process.env.AUTH_SECRET as string,
                {expiresIn: 86400})
        });

    } catch (e) {
        console.error(e);
        return res.status(500).send("There was a problem getting user")
    }


}

const user = async (req: Request, res: any) => {
    try {
        const payload = await jwt.verify(
            req.header('Authorization') as string,
            process.env.AUTH_SECRET as string,
        ) as { id: string };

        const user = await getRepository(User).findOneOrFail(payload.id);
        console.log({user});
        return res.send({user});
    } catch (e) {
        console.error(e);
        return res.status(500).send("There was a problem getting user")
    }
}

const logout = async (req: Request, res: Response) => {
    console.log('Logout');
    res.send('logout');
}

const register = async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        await getRepository(User).insert({
            name: req.body.name,
            id: req.body.user_id,
        });

        await getRepository(Auth).insert({
            user_id: req.body.user_id,
            password: req.body.password
        })

        res.status(201).send({message: 'Registration successful'});
    } catch (e) {
        console.log(e);
        res.status(404).send({message: 'Registration failed'});
    }
}

export {login, user, logout, register}