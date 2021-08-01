const express = require('express');
const app = express();

let Movies = [
    {
        title: 'Something about Mary',
        director: 'someone'
    },
    {
        title: 'movie 2',
        director: 'someone'
    },
    {
        title: 'movie 3',
        director: 'someone else'
    }
];


// GET requests
app.get('/movies', (req, res) => {
    res.json(Movies)
});

app.get('/', (req, res) => {
    res.send('You have arrived to my Movie page!');
});



app.listen(8081, () => {
    console.log('Your app is listening on port 8081.');
});
