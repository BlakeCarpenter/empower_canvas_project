import DAOInterface from "./DAOInterface";
import SQLiteDAO from "./SQLiteDAO";

export default function getDAO(): DAOInterface {
    return new SQLiteDAO("../../sqlite_datafile/empower_db.db");
}