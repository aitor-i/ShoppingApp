import { Grid, Drawer, Badge } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Fragment, useState, useEffect } from "react";
import { StoreProductsType } from "./core/domain/StoreProductsType";
import { getStoreProducts } from "./core/services/getStoreProducts";
import { StyledButton } from "./App.styled";
import Product from "./ui/components/Product/Product";
import Cart from "./ui/components/Cart/Cart";

const getTotalProducts = (products: StoreProductsType[]) =>
  products.reduce(
    (previousValue: number, product: StoreProductsType) =>
      previousValue + product.amount,
    0
  );

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState<StoreProductsType[]>([]);
  const [storeProducts, setStoreProducts] = useState<StoreProductsType[]>([]);

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

  console.log(storeProducts);
  return (
    <Fragment>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          addToCart={handleAddToCart}
          cartProduct={cartProducts}
          removeFromCart={handleRemoveFromCart}
        ></Cart>
      </Drawer>

      <StyledButton onClick={() => setCartOpen(true)}>
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
