import Express from "express";
import { config } from "dotenv";
config();

const app = Express();

app.get('/second-server-status', async (req, res) => {
    try {
        console.log("The Reqeust URL => ", `${process.env.SECOND_SERVER_BASE_URI}/status`)
        const rawJson = await fetch(`${process.env.SECOND_SERVER_BASE_URI}/status`)
        const response = await rawJson.json()
        res.status(200).json({ secondServerStatus: response })
    } catch (error) {
        console.log("The error occured while fetching second-server-status", error.message);
        res.status(500).json({ message: "Failed to gte second server status." })
    }
})
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
