import { Product } from "./product.model";

export class Category {
  constructor(
    public id?: string,
    public name?: string,
    public product?: Product[]
  ) {}
}
