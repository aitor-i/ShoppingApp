import { Grid, Drawer } from "@material-ui/core";
import { Fragment, useState, useEffect } from "react";
import { StoreProductsType } from "./core/domain/StoreProductsType";
import { getStoreProducts } from "./core/services/getStoreProducts";
import Product from "./ui/components/Product/Product";

const handleAddToCart = (clickedProduct: StoreProductsType) => {};

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState<StoreProductsType[]>([]);
  const [storeProducts, setStoreProducts] = useState<StoreProductsType[]>([]);
  useEffect(() => {
    getStoreProducts().then((data) => setStoreProducts(data));
  }, []);

  console.log(storeProducts);
  return (
    <Fragment>
      <Drawer
        anchor="right"
        open={cartOpen}
        onClose={() => setCartOpen(false)}
      ></Drawer>
      <Grid container spacing={3}>
        {storeProducts?.map((product) => (
          <Grid item key={product.id} xs={12} sm={4}>
            <Product
              product={product}
              handleAddToCart={handleAddToCart}
              key={product.id}
            />
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
}

export default App;
