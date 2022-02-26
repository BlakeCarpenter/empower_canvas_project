import Express, {Router} from 'express';
import CanvasResultController from '../controllers/CanvasResultController';

const router:Router = Router();
const controller:CanvasResultController = new CanvasResultController();

router.get("/", controller.getCanvasResults.bind(controller));
router.get("/:id", controller.getCanvasResult.bind(controller));
router.post("/", controller.addCanvasResult.bind(controller));
router.put("/:id", controller.editCanvasResult.bind(controller));
router.delete("/:id", controller.deleteCanvasResult.bind(controller));

export default router;