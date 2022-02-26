"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var AppDAO_1 = __importDefault(require("./daos/AppDAO"));
var PORT = 8080;
var app = (0, express_1.default)();
var allowedOrigins = ['http://localhost:3000'];
var corsOptions = {
    origin: allowedOrigins
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
var appDAO = new AppDAO_1.default("./sqlite_datafile/empower_db.db");
// Canvas Results
app.post("/api/canvas-result", function (req, res) {
    var note = req.body;
    appDAO.run("INSERT INTO canvas_result (first_name, last_name, canvas_notes) VALUES (\"".concat(note.firstName, "\", \"").concat(note.lastName, "\", \"").concat(note.canvasNotes, "\")"))
        .then(function (result) {
        console.log(result);
        res.status(201).send("Successfully created note");
    })
        .catch(function (error) {
        res.status(500).send("Could not create note");
    });
});
app.get("/api/canvas-result", function (req, res) {
    appDAO.all("SELECT * FROM canvas_result")
        .then(function (result) {
        res.status(200).send(result.map(function (v) { return ({
            id: v.id, firstName: v.first_name, lastName: v.last_name, canvasNotes: v.canvas_notes
        }); }));
    })
        .catch(function (error) {
        res.status(500).send("Could not create note");
    });
});
app.get("/api/teapot", function (req, res) {
    res.status(418).send("Could not brew coffee");
});
app.listen(PORT, function () {
    console.log("Server running on port ".concat(PORT));
});
//# sourceMappingURL=server.js.map