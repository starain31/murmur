import "reflect-metadata";
import express from 'express';
import cors from 'cors';
import router from './routes';
import {createConnection} from "typeorm";
import session from 'express-session';

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors({
    origin: [
        'http://localhost:3000'
    ],
    credentials: true,
    exposedHeaders: ['set-cookie']
}));

app.use(session({
    secret: 'murmur-murmur-murmur',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 60 * 1000,
        secure: false
    }
}));

app.use(router)

createConnection().then(() => {
    app.listen(3001, () => {
        console.log('Example app listening on port 3001!')
    });
});

