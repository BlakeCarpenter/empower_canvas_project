import express from "express";
import cors from 'cors';

import sqlLiteDAO from "./daos/SQLiteDAO";
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

// const dao:sqlLiteDAO = new sqlLiteDAO("./sqlite_datafile/empower_db.db");























// // Canvas Results
// app.post("/api/canvas-result", (req:Request<CanvasResult>, res) => {
//     const note:CanvasResult = req.body;
//     dao.run(`INSERT INTO canvas_result (first_name, last_name, canvas_notes) VALUES ("${note.firstName}", "${note.lastName}", "${note.canvasNotes}")`)
//         .then(result => {
//             console.log(result);
//             res.status(201).send("Successfully created note");
//         })
//         .catch(error => {
//             res.status(500).send("Could not create note");
//         })
// });

// app.get("/api/canvas-result", (req:Request<CanvasResult>, res) => {
//     dao.all(`SELECT * FROM canvas_result`)
//         .then(result => {
//             res.status(200).send(result.map((v:any) => ({
//                 id:v.id, firstName: v.first_name, lastName: v.last_name, canvasNotes: v.canvas_notes
//             })));
//         })
//         .catch(error => {
//             res.status(500).send("Could not create note");
//         })
// });

// app.get("/api/teapot", (req, res) => {
//     res.status(418).send("Could not brew coffee");
// });

// app.get("/api/test", (req, res) => {
//     const resultService:CanvasResultService = new CanvasResultService(dao);
//     // resultService.getCanvasResult(1)
//     // resultService.getCanvasResults()
//     resultService.addCanvasResult({firstName:"John", lastName:"Doe", canvasNotes:"further notes"} as CanvasResult)
//         .then(result => {
//             res.status(200).send(result);
//         })
// });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});