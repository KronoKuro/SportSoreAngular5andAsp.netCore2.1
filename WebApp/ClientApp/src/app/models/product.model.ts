import { Suppler } from "./suppler.model";
import { Rating } from  "./rating.model";

export class Product {
  constructor(
    public id?: string,
    public name?: string,
    public categoryName?: string,
    public categoryId?: string,
    public description?: string,
    public suppler?: Suppler,
    public ratings?: Rating[]
  ) {}
}
