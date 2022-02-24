"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var AppDAO_1 = __importDefault(require("./daos/AppDAO"));
var PORT = 8080;
var app = (0, express_1.default)();
app.get("/api/teapot", function (req, res) {
    res.status(418).send("Could not brew coffee");
});
app.get("/api/test", function (req, res) {
    var dao = new AppDAO_1.default("./sqlite_datafile/empower_db.db");
    dao.all("SELECT * FROM canvas_result")
        .then(function (response) {
        console.log(response);
        res.status(200).send(response);
    })
        .catch(function (err) {
        console.log("Error while attempting to retrieve data from database", err);
        res.status(500).send("Could not complete request");
    });
});
app.listen(PORT, function () {
    console.log("Server running on port ".concat(PORT));
});
//# sourceMappingURL=server.js.map