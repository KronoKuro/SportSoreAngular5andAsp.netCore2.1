import { Product } from "./product.model";

export class Rating {
  constructor(
    public id?: string,
    public stars?: number,
    public product?: Product
  ) {}
}
