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
      </Wrapper>
    </Fragment>
  );
};

export default Cart;
