"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mysql2_1 = __importDefault(require("mysql2"));
var app = express_1.default();
//mysql setting
var connection = mysql2_1.default.createConnection({
    host: 'localhost',
    user: 'docker',
    password: 'docker',
    database: 'test'
});
connection.connect();
//cors setting
//app.use((req, res, next) => {
//  res.header("Access-Control-Allow-Origin", "*")
//  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")//
//  next()
// })
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Get example
var router = express_1.default.Router();
router.get('/api/getTest', function (req, res) {
    res.send(req.query);
});
//Post example
router.post('/api/postTest', function (req, res) {
    connection.query('select * from test', function (err, results, fields) {
        if (err)
            throw err;
        res.send(results);
    });
});
app.use(router);
app.listen(3001, function () { console.log('Example app listening on port 3001!'); });
