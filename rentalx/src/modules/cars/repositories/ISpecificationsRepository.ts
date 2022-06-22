import { Specification } from "../model/Specification";

interface ICreateSpecificaionDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ description, name }: ICreateSpecificaionDTO): void;
  findByName(name: string): Specification;
}

export { ISpecificationsRepository, ICreateSpecificaionDTO }