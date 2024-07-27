import express from 'express';
import dotenv from "dotenv";

import authRoutes from './routes/auth.routes.js';
import connectToMongoDB from './db/connectToMongoDB.js';

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000; //Port number is set to 5000 by default

app.get('/', (req, res) => {
    //root route http://localhost:5000
    res.send("Hello, world!!!");
})

app.use("/api/auth", authRoutes)
app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`listening on port ${PORT}`)
});