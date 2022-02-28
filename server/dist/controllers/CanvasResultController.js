"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CanvasResultService_1 = __importDefault(require("../services/CanvasResultService"));
var CanvasResultController = /** @class */ (function () {
    function CanvasResultController() {
        this.canvasResultService = new CanvasResultService_1.default();
    }
    CanvasResultController.prototype.getCanvasResult = function (req, res) {
        var id;
        try {
            id = parseInt(req.params.id, 10);
        }
        catch (_a) {
            throw new Error("Valid id number is not supplied");
        }
        this.canvasResultService.getCanvasResult(id)
            .then(function (result) {
            res.status(200).json({ status: 200, data: result, message: "Successfully retrieved canvas result" });
        })
            .catch(function (err) {
            res.status(500).json({ status: 500, err: err.message });
        });
    };
    CanvasResultController.prototype.getCanvasResults = function (req, res) {
        var _this = this;
        this.canvasResultService.getCanvasResults()
            .then(function (result) {
            res.status(200).json(_this.responseObj(200, result, "Successfully retrieved canvas results"));
        })
            .catch(function (err) {
            res.status(500).json({ status: 500, err: err.message });
        });
    };
    CanvasResultController.prototype.addCanvasResult = function (req, res) {
        this.canvasResultService.addCanvasResult(req.body)
            .then(function (result) {
            res.status(201).json({ status: 201, data: result, message: "Successfully added canvas result" });
        })
            .catch(function (err) {
            res.status(500).json({ status: 500, err: err.message });
        });
    };
    CanvasResultController.prototype.editCanvasResult = function (req, res) {
        var id;
        try {
            id = parseInt(req.params.id, 10);
        }
        catch (_a) {
            throw new Error("Valid id number is not supplied");
        }
        this.canvasResultService.editCanvasResult(id, req.body)
            .then(function (result) {
            res.status(200).json({ status: 200, data: result, message: "Successfully edited canvas result" });
        })
            .catch(function (err) {
            res.status(500).json({ status: 500, err: err.message });
        });
    };
    CanvasResultController.prototype.deleteCanvasResult = function (req, res) {
        var id;
        try {
            id = parseInt(req.params.id, 10);
        }
        catch (_a) {
            throw new Error("Valid id number is not supplied");
        }
        this.canvasResultService.deleteCanvasResult(id)
            .then(function (result) {
            res.status(200).json({ status: 200, data: result, message: "Successfully deleted canvas result" });
        })
            .catch(function (err) {
            res.status(500).json({ status: 500, err: err.message });
        });
    };
    CanvasResultController.prototype.responseObj = function (status, data, message) {
        var response = { status: status };
        if (data)
            response.data = data;
        if (message)
            response.message = message;
        return response;
    };
    return CanvasResultController;
}());
exports.default = CanvasResultController;
//# sourceMappingURL=CanvasResultController.js.map