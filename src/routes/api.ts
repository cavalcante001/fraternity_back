import { Router } from "express";
import * as csController from '../controller/counterStrikeController';

const router = Router();

router.get('/lista-de-bans/:page', csController.listaBans);  

export default router;