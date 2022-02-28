import { Request, Response } from "express";
import CanvasResultService from "../services/CanvasResultService";

interface ResponseObj {
    status:number;
    data?:any;
    message?:string;
}

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
                res.status(200).json({status: 200, data: result, message: "Successfully retrieved canvas result"});
            })
            .catch(err => {
                res.status(500).json({status: 500, err: err.message})
            })
    }

    getCanvasResults(req:Request, res:Response):void{
        this.canvasResultService.getCanvasResults()
            .then(result => {
                res.status(200).json(this.responseObj(200, result, "Successfully retrieved canvas results"));
            })
            .catch(err => {
                res.status(500).json({status: 500, err: err.message})
            });
    }

    addCanvasResult(req:Request, res:Response):void{
        this.canvasResultService.addCanvasResult(req.body)
            .then(result => {
                res.status(201).json({status: 201, data: result, message: "Successfully added canvas result"});
            })
            .catch(err => {
                res.status(500).json({status: 500, err: err.message})
            })
    }

    editCanvasResult(req:Request, res:Response):void{
        let id:number;
        try{
            id = parseInt(req.params.id, 10);
        } catch {
            throw new Error("Valid id number is not supplied");
        }

        this.canvasResultService.editCanvasResult(id, req.body)
            .then(result => {
                res.status(200).json({status: 200, data: result, message: "Successfully edited canvas result"});
            })
            .catch(err => {
                res.status(500).json({status: 500, err: err.message})
            })
    }

    deleteCanvasResult(req:Request, res:Response):void{
        let id:number;
        try{
            id = parseInt(req.params.id, 10);
        } catch {
            throw new Error("Valid id number is not supplied");
        }

        this.canvasResultService.deleteCanvasResult(id)
            .then(result => {
                res.status(200).json({status: 200, data: result, message: "Successfully deleted canvas result"});
            })
            .catch(err => {
                res.status(500).json({status: 500, err: err.message})
            })
    }


    private responseObj(status:number, data:any, message:string):ResponseObj{
        const response:ResponseObj = {status};
        if(data) response.data = data;
        if(message) response.message = message;
        return response;
    }
}