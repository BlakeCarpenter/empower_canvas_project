"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var CanvasResultRoutes_1 = __importDefault(require("./CanvasResultRoutes"));
var indexRouter = (0, express_1.Router)();
indexRouter.use("/canvas-result", CanvasResultRoutes_1.default);
exports.default = indexRouter;
//# sourceMappingURL=index.js.map