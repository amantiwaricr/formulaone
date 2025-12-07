/* eslint-disable react/prop-types */
import { useCart } from '../context/CartContext';
import './ProductCard.css';

// eslint-disable-next-line react/prop-types
function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        <span className="product-category">{product.category}</span>
        <div className="product-overlay">
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">${product.price}</span>
          <button className="quick-add" onClick={handleAddToCart} title="Quick add to cart">
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
