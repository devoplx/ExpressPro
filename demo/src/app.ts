import express from 'express';
import init from '../../src/index';

const app = express();

init(app, {helmet: true});

app.get('/', (req, res) => {
    res.send('Hello World!');
    });

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
    });