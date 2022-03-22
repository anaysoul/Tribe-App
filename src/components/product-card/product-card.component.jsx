import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import './product-card.styles.scss';

const ProductCard = ({ product }) => {
  const { name, imageUrl, description, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <span className="description">{description}</span>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
