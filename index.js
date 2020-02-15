const express = require('express');
const app = express();

app.get('/home', async (req, res, next) => {
    res.status(200).send({ message: 'Status:HOME PAGE' });
})

app.get('/', async (req, res, next) => {
    res.status(200).send({ message: 'Status:UP' });
})

app.get('*', (req, res) => {
    if (!res.headersSent) {
        console.log(new Error('Status:PAGE NOT FOUND'));
        res.status(400).send({ message: 'Status:PAGE NOT FOUND' });
    }
})

app.listen(3001, () => {
    console.log('Api initialized')
})