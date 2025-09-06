import Express from 'express'
import { config } from 'dotenv'
import Path from 'path';
import { connectRedis, redisClient } from './redis_core.js';

config();

const app = Express();

app.use(Express.static(Path.join(Path.dirname(import.meta.filename), 'dist')))
app.get('/description', async (req, res) => {
    let visitCount = 0
    try {
        visitCount = await redisClient.get(`${req.ip}`);
        if (visitCount === null) visitCount = 1;
        else visitCount = +visitCount + 1
        await redisClient.set(`${req.ip}`, visitCount)
    }
    catch {
        console.log(`Error Occured while getting count value from redis key:${`${req.ip}`}.`)
    }
    res.status(200).json({ message: `Utilising the docker multi conatiner application via dokcer compose. 🐳\n Visit Count: ${visitCount}` })
})
app.get('/', async (req, res) => {
    res.status(200).sendFile(Path.join(Path.dirname(import.meta.filename), 'dist', 'index.html'))
})

const PORT = process.env.PORT || 4000

connectRedis().then(res => {
    if (!res) return;
    app.listen(PORT, () => {
        console.log(`Server is listening to the port ${PORT} ! 🚀`)
    })
})

