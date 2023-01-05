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

app.get('/', (req, res) => {
    res.send("Yay i am running for node fermwork")
})

// another get request 
app.get('/user', (req, res) => {
    res.send(friends);
})

app.listen(port, () => console.log(`lisiting port ${port}`))