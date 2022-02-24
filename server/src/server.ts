import express from "express";
import AppDAO from "./daos/AppDAO";
const PORT = 8080;
const app = express();

app.get("/api/teapot", (req, res) => {
    res.status(418).send("Could not brew coffee");
});

app.get("/api/test", (req, res) => {
    const dao:AppDAO = new AppDAO("./sqlite_datafile/empower_db.db");
    dao.all("SELECT * FROM canvas_result")
        .then(response => {
            console.log(response);
            res.status(200).send(response);
        })
        .catch(err => {
            console.log("Error while attempting to retrieve data from database", err)
            res.status(500).send("Could not complete request");
        });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});