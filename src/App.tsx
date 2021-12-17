import { Fragment, useState, useEffect } from "react";

interface StoreProductsType {
  id: number;
  category: string;
  description: string;
  image: string;
  amount: number;
}
const getStoreProducts = async (): Promise<StoreProductsType[]> => {
  return await (await fetch("https://fakestoreapi.com/products")).json();
};

function App() {
  const [storeProducts, setStoreProducts] = useState<StoreProductsType[]>([]);
  useEffect(() => {
    getStoreProducts().then((data) => setStoreProducts(data));
  }, []);

  console.log(storeProducts);
  return <Fragment></Fragment>;
}

export default App;
