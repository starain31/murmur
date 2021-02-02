import "reflect-metadata";
import express from 'express'
import cors from 'cors'
import router from './routes'
import {createConnection} from "typeorm";
import session from 'express-session'

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(session({
    secret: 'monu'
}))

app.use(router)

createConnection().then(() => {
    app.listen(3001, () => {
        console.log('Example app listening on port 3001!')
    });
});

