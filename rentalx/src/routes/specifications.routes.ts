import {  Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationsRotues = Router();

specificationsRotues.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
})

export { specificationsRotues }