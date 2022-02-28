CREATE TABLE IF NOT EXISTS "canvas_result" (
	"id"	INTEGER NOT NULL UNIQUE,
	"user_id"	INTEGER,
	"first_name"	TEXT,
	"last_name"	TEXT,
	"canvas_notes"	TEXT,
	PRIMARY KEY("id" AUTOINCREMENT)
);