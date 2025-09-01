import Express from "express";
const app = Express();
const PORT = 3000;


app.get('/', (req, res) => {
    res.status(200).send("Hello World! This is a Node.js application running inside a Docker container.");
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});