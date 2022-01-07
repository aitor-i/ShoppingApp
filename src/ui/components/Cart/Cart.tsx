import CartProduct from "../CartProduct/CartProduct";

import { Wrapper } from "./Cart.styled";

import { StoreProductsType } from "../../../core/domain/StoreProductsType";
import { Fragment } from "react";

interface Props {
  cartProduct: StoreProductsType[];
  addToCart: (clickedItem: StoreProductsType) => void;
  removeFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({ cartProduct, addToCart, removeFromCart }) => {
  const calculateTotal = (products: StoreProductsType[]) => {
    return products.reduce(
      (previousValue: number, product: StoreProductsType) => {
        return previousValue + product.amount * product.price;
      },
      0
    );
  };

  return (
    <Fragment>
      <Wrapper>
        <h2>Your Shopping Cart</h2>
        {cartProduct.length === 0 ? <p>No products in the cart</p> : null}
        {cartProduct?.map((product) => (
          <CartProduct
            key={product.id}
            product={product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
        <h2>Total: ${calculateTotal(cartProduct).toFixed(2)}</h2>
      </Wrapper>
    </Fragment>
  );
};

export default Cart;
