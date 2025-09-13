import Express from "express";
import { config } from "dotenv";
config();

const app = Express();

const PORT = process.env.PORT || 5500
app.get('/status', (req, res) => {
    res.status(200).json({ status: "Up", port: PORT })
})
app.get('/', (req, res) => {
    res.status(200).send(`The server is up at port ${PORT}`)
})
app.listen(PORT, () => {
    console.log(`Server is listening to the port ${PORT} 🫴🏻.`)
})
