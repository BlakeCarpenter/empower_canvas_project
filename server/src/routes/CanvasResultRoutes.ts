import Express, {Router} from 'express';
import CanvasResultController from '../controllers/CanvasResultController';

const router:Router = Router();
const controller:CanvasResultController = new CanvasResultController();

router.get("/:id", controller.getCanvasResult);

export default router;