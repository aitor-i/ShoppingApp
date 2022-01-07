import Button from "@material-ui/core/Button";
import { Fragment } from "react";

import { StoreProductsType } from "../../../core/domain/StoreProductsType";

import { Wrapper } from "./CartProduct.styles";

interface Props {
  product: StoreProductsType;
  addToCart: (clickedProduct: StoreProductsType) => void;
  removeFromCart: (id: number) => void;
}

const CartProduct: React.FC<Props> = ({
  product,
  addToCart,
  removeFromCart,
}) => {
  return (
    <Fragment>
      <Wrapper>
        <div>
          <h3>{product.title}</h3>
          <div className="information">
            <p>Price: ${product.price}</p>
            <p>Total: ${(product.amount * product.price).toFixed(2)}</p>
          </div>
          <div className="buttons">
            <Button
              size="small"
              disableElevation
              variant="contained"
              onClick={() => removeFromCart(product.id)}
            >
              {" "}
              -{" "}
            </Button>
            <Button
              size="small"
              disableElevation
              variant="contained"
              onClick={() => addToCart(product)}
            >
              {" "}
              +{" "}
            </Button>
          </div>
        </div>

        <img src={product.image} alt={product.title} />
      </Wrapper>
    </Fragment>
  );
};

export default CartProduct;
