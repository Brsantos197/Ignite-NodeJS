import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response) {
  CreateCourseService.execute({
    name: "NodeJS",
    duration: 10,
    educator: "Dani Leão"
  });

  CreateCourseService.execute({
    name: "ReactJS",
    educator: "Diego Fernandes"
  });

  return response.send()
}