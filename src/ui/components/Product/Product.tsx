import Button from "@material-ui/core/Button/Button";
import { StoreProductsType } from "../../../core/domain/StoreProductsType";
import Wrapper from "./Product.styled";

type Props = {
  product: StoreProductsType;
  handleAddToCart: (clickedProduct: StoreProductsType) => void;
};

const Product: React.FC<Props> = ({ product, handleAddToCart }) => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default Product;
