import { Grid, Drawer, Badge } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Fragment, useState, useEffect } from "react";
import { StoreProductsType } from "./core/domain/StoreProductsType";
import { getStoreProducts } from "./core/services/getStoreProducts";
import { StyledButton } from "./App.styled";
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
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge color="error">
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
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
