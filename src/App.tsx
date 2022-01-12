import { Fragment, useState } from "react";

import { useCart } from "./core/services/hooks/useCart";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Badge, Drawer, Grid } from "@material-ui/core";

import Cart from "./ui/components/Cart/Cart";
import getTotalProducts from "./core/services/getTotalProducts";
import Header from "./ui/components/Header/Header";
import Product from "./ui/components/Product/Product";

import { StyledButton } from "./App.styled";

function App() {
  const {
    cartProducts,
    handleAddToCart,
    storeProducts,
    handleRemoveFromCart,
  } = useCart();

  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <Fragment>
      <Header />
      <Drawer
        anchor="right"
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      >
        <Cart
          addToCart={handleAddToCart}
          cartProduct={cartProducts}
          removeFromCart={handleRemoveFromCart}
        ></Cart>
      </Drawer>

      <StyledButton onClick={() => setIsCartOpen(true)}>
        <Badge badgeContent={getTotalProducts(cartProducts)} color="error">
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
