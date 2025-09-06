import Express from "express";
import { config } from 'dotenv';
import Path from "path"
import { fileURLToPath } from 'url';
import { dirname } from 'path';


config();

const app = Express();

const PORT = process.env.PORT || 3000;

app.get('/', (_, res) => {
    res.status(200).sendFile(Path.join(getCurrentWorkingDirectoryPath(), 'view', 'index.html'));
})

app.listen(PORT, () => {
    console.log(`Server is listing to the port ${PORT}`)
})


export const getCurrentWorkingDirectoryPath = () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    return __dirname
}
