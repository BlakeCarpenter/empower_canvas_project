"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = __importDefault(require("./routes"));
var PORT = 8080;
var app = (0, express_1.default)();
var allowedOrigins = ['http://localhost:3000'];
var corsOptions = {
    origin: allowedOrigins
};
app.use("/api", routes_1.default);
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
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
app.listen(PORT, function () {
    console.log("Server running on port ".concat(PORT));
});
//# sourceMappingURL=server.js.map