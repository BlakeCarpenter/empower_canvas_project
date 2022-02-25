import express, { Request } from "express";
import AppDAO from "./daos/AppDAO";
import CanvasResult from "./models/CanvasResult";
const PORT = 8080;
const app = express();
app.use(express.json());

const appDAO:AppDAO = new AppDAO("./sqlite_datafile/empower_db.db");

// Canvas Results
app.post("/api/canvas-result", (req:Request<CanvasResult>, res) => {
    const note:CanvasResult = req.body;
    appDAO.run(`INSERT INTO canvas_result (first_name, last_name, canvas_notes) VALUES ("${note.firstName}", "${note.lastName}", "${note.canvasNotes}")`)
        .then(result => {
            console.log(result);
            res.status(201).send("Successfully created note");
        })
        .catch(error => {
            res.status(500).send("Could not create note");
        })
});

app.get("/api/canvas-result", (req:Request<CanvasResult>, res) => {
    appDAO.all(`SELECT * FROM canvas_result`)
        .then(result => {
            res.status(200).send(result);
        })
        .catch(error => {
            res.status(500).send("Could not create note");
        })
});

app.get("/api/teapot", (req, res) => {
    res.status(418).send("Could not brew coffee");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});