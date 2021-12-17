import { StoreProductsType } from "../domain/StoreProductsType";

export const getStoreProducts = async (): Promise<StoreProductsType[]> => {
  return await (await fetch("https://fakestoreapi.com/products")).json();
};
