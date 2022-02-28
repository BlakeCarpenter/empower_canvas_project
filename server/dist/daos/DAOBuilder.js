"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var posix_1 = __importDefault(require("path/posix"));
var SQLiteDAO_1 = __importDefault(require("./SQLiteDAO"));
function getDAO() {
    return new SQLiteDAO_1.default(posix_1.default.resolve(__filename, "..", "sqlite_datafile", "empower_db.db"));
}
exports.default = getDAO;
//# sourceMappingURL=DAOBuilder.js.map