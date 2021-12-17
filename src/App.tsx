import { Fragment, useState, useEffect } from "react";
import { StoreProductsType } from "./core/domain/StoreProductsType";
import { getStoreProducts } from "./core/services/getStoreProducts";
import Button from "@material-ui/core/Button/Button";

type Props = {
  product: StoreProductsType;
  handleAddToCart: (clickedProduct: StoreProductsType) => void;
};
const Product: React.FC<Props> = ({ product, handleAddToCart }) => {
  return (
    <>
      <img src={product.image} alt={product.title} />
      <div>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <h3>${product.price}</h3>
      </div>
      <Button
        onClick={() => {
          handleAddToCart(product);
        }}
      >
        Add to cart
      </Button>
    </>
  );
};

const handleAddToCart = (clickedProduct: StoreProductsType) => {};

function App() {
  const [storeProducts, setStoreProducts] = useState<StoreProductsType[]>([]);
  useEffect(() => {
    getStoreProducts().then((data) => setStoreProducts(data));
  }, []);

  console.log(storeProducts);
  return <Fragment></Fragment>;
}

export default App;
