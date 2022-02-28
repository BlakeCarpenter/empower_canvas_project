import path from "path/posix";
import DAOInterface from "./DAOInterface";
import SQLiteDAO from "./SQLiteDAO";

export default function getDAO(): DAOInterface {
    return new SQLiteDAO(path.resolve(__filename, "..", "sqlite_datafile", "empower_db.db"));
}