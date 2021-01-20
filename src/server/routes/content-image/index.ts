import { NextFunction, Request, Response, Router } from "express";
import * as Canvas from "canvas";

//  modules
import * as OrigModule from "@src/server/assets/modules/origModule";

//	assets
import NoImage from "./images/noImage.png";

//  types

//  classes

//  router
const router = Router();

//	[ Get ] : /content-image/fetch?type=[type]&id=[id]
router.get("/fetch", (req: Request, res: Response, next: NextFunction) => {});

export default router;
