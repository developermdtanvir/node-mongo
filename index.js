const express = require('express');
const app = express();

const port = 3001;
const friends = [
    { name: 'Tanvir', roll: 30, section: 'B' },
    { name: 'Tamim', roll: 30, section: 'B' },
    { name: 'Rony', roll: 30, section: 'B' },
    { name: 'Tareq', roll: 30, section: 'B' },
    { name: 'Shazzed', roll: 30, section: 'B' },
    { name: 'Rymon', roll: 30, section: 'B' }
]
const names = ['Tanvir', 'Shakil', 'Tamim', 'Sabbir']

app.get('/', (req, res) => {
    res.send("Yay i am running for node fermwork")
})

// another get request 
app.get('/name/:id', (req, res) => {
    const id = req.params.id
    const name = names[id]
    res.send({ name, id });
    console.log(req.query)
})
app.get('/user', (req, res) => {
    res.send(friends);
})


app.listen(port, () => console.log(`lisiting port ${port}`))