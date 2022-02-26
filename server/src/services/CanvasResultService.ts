import DAOInterface from "../daos/DAOInterface";
import getDAO from "../daos/DAOBuilder";
import CanvasResult from "../models/CanvasResult";

export default class CanvasResultService{

    async getCanvasResult(id:number):Promise<CanvasResult>{
        const dao:DAOInterface = getDAO();
        console.log(dao);
        const result:any = await dao.get("SELECT * FROM canvas_result WHERE id = ?", [id]);
        return this.sqlReturnToType(result);
    }

    async getCanvasResults():Promise<CanvasResult[]>{
        const dao:DAOInterface = getDAO();
        const result:any[] = await dao.all("SELECT * FROM canvas_result", []);
        return result.map(v => this.sqlReturnToType(v));
    }

    async addCanvasResult(newCanvas:CanvasResult):Promise<any>{
        const dao:DAOInterface = getDAO();
        return await dao.run(`INSERT INTO canvas_result (first_name, last_name, canvas_notes) VALUES (?, ?, ?)`, [newCanvas.firstName, newCanvas.lastName, newCanvas.canvasNotes])
    }

    // editCanvasResult(id:number, editedCanvas:CanvasResult):void{

    // }

    // deleteCanvasResult(id:number):void{

    // }

    private sqlReturnToType(sql:any):CanvasResult{
        return {id: sql.id, firstName: sql.first_name, lastName: sql.last_name, canvasNotes: sql.canvas_notes} as CanvasResult;
    }

}

