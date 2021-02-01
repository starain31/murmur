import "reflect-metadata";
import express from 'express'
import cors from 'cors'
import router from './routs'
import {createConnection} from "typeorm";

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use(router)

createConnection().then(() => {
    app.listen(3001, () => {
        console.log('Example app listening on port 3001!')
    });
});

