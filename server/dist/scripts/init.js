"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DAOBuilder_1 = __importDefault(require("../daos/DAOBuilder"));
function init() {
    var dao = (0, DAOBuilder_1.default)();
    dao.run("\n        CREATE TABLE IF NOT EXISTS \"canvas_result\" (\n            \"id\"\tINTEGER NOT NULL UNIQUE,\n            \"user_id\"\tINTEGER,\n            \"first_name\"\tTEXT,\n            \"last_name\"\tTEXT,\n            \"canvas_notes\"\tTEXT,\n            PRIMARY KEY(\"id\" AUTOINCREMENT)\n        )\n    ", [])
        .then(function () {
        dao.all("SELECT * FROM canvas_result", [])
            .then(function () { return console.log("Table created successfully"); })
            .catch(function (err) { return console.log("Error"); });
    });
}
init();
//# sourceMappingURL=init.js.map