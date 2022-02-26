import { Request, Response } from "express";
import CanvasResultService from "../services/CanvasResultService";

export default class CanvasResultController{
    canvasResultService:CanvasResultService;

    constructor(){
        this.canvasResultService = new CanvasResultService();
    }

    getCanvasResult(req:Request, res:Response):void{
        let id:number;
        try{
            id = parseInt(req.params.id, 10);
        } catch {
            throw new Error("Valid id number is not supplied");
        }

        this.canvasResultService.getCanvasResult(id)
            .then(result => {
                res.status(200).json({status: 200, data: result, message: "Successfully retrieved canvas results"});
            })
            .catch(err => {
                err.status(500).json({status: 500, err: err.message})
            })
    }
}