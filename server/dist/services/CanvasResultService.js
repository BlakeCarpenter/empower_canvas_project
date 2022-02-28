"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DAOBuilder_1 = __importDefault(require("../daos/DAOBuilder"));
var CanvasResultService = /** @class */ (function () {
    function CanvasResultService() {
    }
    CanvasResultService.prototype.getCanvasResult = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var dao, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dao = (0, DAOBuilder_1.default)();
                        return [4 /*yield*/, dao.get("SELECT * FROM canvas_result WHERE id = ?", [id])];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, this.sqlReturnToType(result)];
                }
            });
        });
    };
    CanvasResultService.prototype.getCanvasResults = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dao, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dao = (0, DAOBuilder_1.default)();
                        return [4 /*yield*/, dao.all("SELECT * FROM canvas_result", [])];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.map(function (v) { return _this.sqlReturnToType(v); })];
                }
            });
        });
    };
    CanvasResultService.prototype.addCanvasResult = function (newCanvas) {
        return __awaiter(this, void 0, void 0, function () {
            var dao;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newCanvas.id = undefined;
                        dao = (0, DAOBuilder_1.default)();
                        return [4 /*yield*/, dao.run("INSERT INTO canvas_result (first_name, last_name, canvas_notes) VALUES (?, ?, ?)", [newCanvas.firstName, newCanvas.lastName, newCanvas.canvasNotes])];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CanvasResultService.prototype.editCanvasResult = function (id, editedCanvas) {
        return __awaiter(this, void 0, void 0, function () {
            var dao;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        editedCanvas.id = id;
                        dao = (0, DAOBuilder_1.default)();
                        return [4 /*yield*/, dao.run("UPDATE canvas_result SET first_name=?, last_name=?, canvas_notes=? WHERE id = ?", [editedCanvas.firstName, editedCanvas.lastName, editedCanvas.canvasNotes, editedCanvas.id])];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, dao.get("SELECT * FROM canvas_result WHERE id = ?", [id])];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CanvasResultService.prototype.deleteCanvasResult = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var dao, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dao = (0, DAOBuilder_1.default)();
                        return [4 /*yield*/, dao.get("SELECT * FROM canvas_result WHERE id = ?", [id])];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, dao.run("DELETE FROM canvas_result WHERE id = ?", [id])];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    CanvasResultService.prototype.sqlReturnToType = function (sql) {
        return { id: sql.id, firstName: sql.first_name, lastName: sql.last_name, canvasNotes: sql.canvas_notes };
    };
    return CanvasResultService;
}());
exports.default = CanvasResultService;
//# sourceMappingURL=CanvasResultService.js.map