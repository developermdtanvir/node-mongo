const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors(
    { origin: 'http://127.0.0.1:5500' }
));


const port = 3000;
const users = [{ name: 'Tanvir', Roll: 20 },
{ name: 'Shamim', Roll: 3 },
{ name: 'Shakib', Roll: 20 },
{ name: 'Rimon', Roll: 21 },
{ name: 'Rony', Roll: 22 }
]
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    const user = users[userId]
    res.send(user);
})

app.get('/', (req, res) => {
    res.send('My Express js Server is Ready')
})

app.listen(port, () => console.log(`listining port ${port}`))
