"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var CanvasResultController_1 = __importDefault(require("../controllers/CanvasResultController"));
var router = (0, express_1.Router)();
var controller = new CanvasResultController_1.default();
router.get("/", controller.getCanvasResults.bind(controller));
router.get("/:id", controller.getCanvasResult.bind(controller));
router.post("/", controller.addCanvasResult.bind(controller));
router.put("/:id", controller.editCanvasResult.bind(controller));
router.delete("/:id", controller.deleteCanvasResult.bind(controller));
exports.default = router;
//# sourceMappingURL=CanvasResultRoutes.js.map