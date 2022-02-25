import sqlite3, {Database, RunResult} from "sqlite3";

export default class AppDAO{
    db:Database;

    constructor(dbFilePath:string){
        this.db = new sqlite3.Database(dbFilePath, (err) => {
            if(err){
                console.log("Error connecting to database", err);
            } else {
                console.log("Connected to database");
            }
        });
    }

    run(sql:string, params=[]):Promise<any>{
        return new Promise((resolve, reject) => {
            this.db.run(sql, params, (result:RunResult, err:Error) => {
                if (err) {
                    console.log('Error running sql ' + sql);
                    console.log(err);
                    reject(err);
                  } else {
                    resolve(result);
                  }
            })
        });
    }

    get(sql:string, params=[]):Promise<any>{
        return new Promise((resolve, reject) => {
            this.db.get(sql, params, (err:Error, result:RunResult) => {
                if (err) {
                    console.log('Error running sql ' + sql);
                    console.log(err);
                    reject(err);
                  } else {
                    resolve(result);
                  }
            })
        });
    }

    all(sql:string, params=[]):Promise<any>{
        return new Promise((resolve, reject) => {
            this.db.all(sql, params, (err:Error, result:RunResult) => {
                if (err) {
                    console.log('Error running sql ' + sql);
                    console.log(err);
                    reject(err);
                  } else {
                    resolve(result);
                  }
            })
        });
    }

}