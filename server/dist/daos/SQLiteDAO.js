"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sqlite3_1 = __importDefault(require("sqlite3"));
var SQLiteDAO = /** @class */ (function () {
    function SQLiteDAO(dbFilePath) {
        this.db = new sqlite3_1.default.Database(dbFilePath, function (err) {
            if (err) {
                console.log("Error connecting to database", err);
            }
            else {
                console.log("Connected to database");
            }
        });
    }
    SQLiteDAO.prototype.run = function (sql, params) {
        var _this = this;
        if (params === void 0) { params = []; }
        return new Promise(function (resolve, reject) {
            _this.db.run(sql, params, function (result, err) {
                if (err) {
                    console.log('Error running sql ' + sql);
                    console.log(err);
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    };
    SQLiteDAO.prototype.get = function (sql, params) {
        var _this = this;
        if (params === void 0) { params = []; }
        return new Promise(function (resolve, reject) {
            _this.db.get(sql, params, function (err, result) {
                if (err) {
                    console.log('Error running sql ' + sql);
                    console.log(err);
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    };
    SQLiteDAO.prototype.all = function (sql, params) {
        var _this = this;
        if (params === void 0) { params = []; }
        return new Promise(function (resolve, reject) {
            _this.db.all(sql, params, function (err, result) {
                if (err) {
                    console.log('Error running sql ' + sql);
                    console.log(err);
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    };
    return SQLiteDAO;
}());
exports.default = SQLiteDAO;
//# sourceMappingURL=SQLiteDAO.js.map