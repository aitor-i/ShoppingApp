import { Fragment, useState, useEffect } from "react";
import { StoreProductsType } from "./core/domain/StoreProductsType";
import { getStoreProducts } from "./core/services/getStoreProducts";

function App() {
  const [storeProducts, setStoreProducts] = useState<StoreProductsType[]>([]);
  useEffect(() => {
    getStoreProducts().then((data) => setStoreProducts(data));
  }, []);

  console.log(storeProducts);
  return <Fragment></Fragment>;
}

export default App;
