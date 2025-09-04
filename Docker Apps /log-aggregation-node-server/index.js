import Express from 'express';
import fs from 'fs';

const app = Express();

app.get('/', (req, res) => {
    fs.appendFileSync('./logs/server.log', `${req.method} ${req.host} ${req.ip}\n`, { encoding: 'utf-8' });
    res.status(200).send('Your request has been logged.');
});

app.get('/logs', (req, res) => {
    const logs = fs.readFileSync('./logs/server.log', { encoding: 'utf-8' });
    res.status(200).send(logs);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

if (!fs.existsSync('./logs')) fs.mkdirSync('./logs');
