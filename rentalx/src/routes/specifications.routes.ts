import {  Router } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationsRotues = Router();

const specificationRepository = new SpecificationsRepository();

specificationsRotues.post("/", (request, response) => {
  const { name, description } = request.body
  const createSpecificationService = new CreateSpecificationService(specificationRepository);
  createSpecificationService.execute({ name, description });

  return response.status(201).send();
})

export { specificationsRotues }