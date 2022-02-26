import {Router} from 'express';
import canvasResultRouter from "./CanvasResultRoutes";

const indexRouter = Router();
indexRouter.use("/canvas-result", canvasResultRouter);

export default indexRouter;