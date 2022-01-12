import { StoreProductsType } from "../domain/StoreProductsType";

const getTotalProducts = (products: StoreProductsType[]) =>
  products.reduce(
    (previousValue: number, product: StoreProductsType) =>
      previousValue + product.amount,
    0
  );

export default getTotalProducts;
