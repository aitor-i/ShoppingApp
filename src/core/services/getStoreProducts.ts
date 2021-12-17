import { StoreProductsType } from "./core/domain/StoreProductsType";

export const getStoreProducts = async (): Promise<StoreProductsType[]> => {
  return await (await fetch("https://fakestoreapi.com/products")).json();
};
