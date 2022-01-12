import { useState, useEffect } from "react";
import { StoreProductsType } from "./core/domain/StoreProductsType";
import { getStoreProducts } from "./core/services/getStoreProducts";

export function useCart() {
  const [cartProducts, setCartProducts] = useState<StoreProductsType[]>(
    () => JSON.parse(localStorage.getItem("cartProducts")!) || []
  );
  const [storeProducts, setStoreProducts] = useState<StoreProductsType[]>([]);
  useEffect(() =>
    window.localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
  );

  const handleRemoveFromCart = (id: number) => {
    setCartProducts((previous) => {
      return previous.reduce((previousValue, product) => {
        if (product.id === id) {
          if (product.amount === 1) return previousValue;
          return [...previousValue, { ...product, amount: product.amount - 1 }];
        } else {
          return [...previousValue, { ...product }];
        }
      }, [] as StoreProductsType[]);
    });
  };

  const handleAddToCart = (clickedProduct: StoreProductsType) => {
    setCartProducts((previous) => {
      const isProductInCart = previous.find(
        (product) => product.id === clickedProduct.id
      );

      if (isProductInCart) {
        return previous.map((product) =>
          product.id === clickedProduct.id
            ? { ...product, amount: product.amount + 1 }
            : product
        );
      }
      return [...previous, { ...clickedProduct, amount: 1 }];
    });
  };
  useEffect(() => {
    getStoreProducts().then((data) => setStoreProducts(data));
  }, []);

  return { cartProducts, handleAddToCart, storeProducts, handleRemoveFromCart };
}
