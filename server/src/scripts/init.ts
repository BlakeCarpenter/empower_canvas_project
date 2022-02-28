import DAOInterface from "../daos/DAOInterface";
import getDAO from "../daos/DAOBuilder";

function init(){
    const dao:DAOInterface = getDAO();
    dao.run(`
        CREATE TABLE IF NOT EXISTS "canvas_result" (
            "id"	INTEGER NOT NULL UNIQUE,
            "user_id"	INTEGER,
            "first_name"	TEXT,
            "last_name"	TEXT,
            "canvas_notes"	TEXT,
            PRIMARY KEY("id" AUTOINCREMENT)
        )
    `, [])
        .then(() => {
            dao.all("SELECT * FROM canvas_result", [])
                .then(() => console.log("Table created successfully"))
                .catch(err => console.log("Error"));
        })
}

init();