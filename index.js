const express = require('express')

const app = express()

const cors = require('cors')

const bodypaser = require('body-parser')

app.use(bodypaser.json());
app.use(cors());
const username = ['Tanvir', 'Rahim', 'Karim', 'Jamil', 'Mahmudul']

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;

    //it is old version website using sort 
    // console.log(req.query.sort)


    const name = username[userId];
    res.send(name);
})

app.post('/adduser', (req, res) => {
    console.log(req.body)
})

app.listen('3000', () => console.log('lintining Port 3000'))

