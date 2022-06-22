import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { specificationsRotues } from "./specifications.routes";

const router = Router();

router.use("/categories", categoriesRoutes)
router.use("/specifications", specificationsRotues)

export { router }