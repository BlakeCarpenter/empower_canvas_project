import express from "express";
import cors from 'cors';

import routes from "./routes";

const PORT = 8080;
const app = express();

const allowedOrigins = ['http://localhost:3000']
const corsOptions:cors.CorsOptions = {
    origin: allowedOrigins
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", routes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});