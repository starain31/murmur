import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'
import {createConnection} from "typeorm";
import {Murmurs} from "./entity/Murmurs";

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

//TypeORM
createConnection({
    type: "mysql",
    host: "localhost",
    port: 3307,
    username: "docker",
    password: "docker",
    database: "main",
    entities: [
        __dirname + "/entity/*.ts"
    ],
    synchronize: true,
    logging: false
}).then(async connection => {
    const router: express.Router = express.Router()
    router.get('/api/murmurs', async (req, res) => {
        const page: number = Number(req.query.page as string);

        const murmurs = await connection.getRepository(Murmurs).find({
            skip: 10 * (page-1),
            take: 10,
        });
        res.send(murmurs)
    })

    app.use(router)

    app.listen(3001, () => {
        console.log('Example app listening on port 3001!')
    })
}).catch(error => console.log(error));

