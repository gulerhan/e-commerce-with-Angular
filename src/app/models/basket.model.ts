import { ProductModel } from "./product.model";

export class BasketModel extends ProductModel{
  product: ProductModel = new ProductModel()
}
