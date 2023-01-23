import { Router } from "express";
import { postNewMusic, getPlaylist, deleteMusic, editMusicInfo, getAlbum} from "../controllers/controller.js";
import { validateId } from "../middlewares/middleware.js";

const router = Router();

router.get("/playlist", getPlaylist);
router.post("/playlist", postNewMusic);
router.put("/playlist/:id", validateId, editMusicInfo);
router.delete("/playlist/:id", validateId, deleteMusic);
router.get("/playlist/:album", getAlbum);

export default router;
