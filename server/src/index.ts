import express from 'express'
import mysql from 'mysql2'
const app = express();

//mysql setting
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307,
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

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Get example
const router: express.Router = express.Router()
router.get('/api/murmurs', (req, res) => {
  res.send(`/api/murmurs endpoint`)
})

//Post example
router.post('/api/postTest', (req, res) => {
  connection.query('select * from test', function (err, results, fields) {
    if (err) throw err
    res.send(results)
  });
})

app.use(router)

app.listen(3001, () => { console.log('Example app listening on port 3001!') })
