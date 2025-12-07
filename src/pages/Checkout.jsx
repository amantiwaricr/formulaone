import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Checkout.css';

function Checkout() {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  // eslint-disable-next-line no-unused-vars
  const [step, setStep] = useState('cart');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    if (cartItems.length > 0) {
      setOrderPlaced(true);
      clearCart();
      setTimeout(() => {
        setOrderPlaced(false);
        setStep('cart');
      }, 3000);
    }
  };

  if (orderPlaced) {
    return (
      <div className="checkout">
        <div className="order-success">
          <div className="success-message">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#dc0000" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <h2>Order Placed Successfully!</h2>
            <p>Thank you for your purchase.</p>
            <p>Your order has been confirmed and will be shipped soon.</p>
            <Link to="/merchandise" className="continue-btn">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout">
      <div className="checkout-hero">
        <h1>Checkout</h1>
      </div>

      <div className="checkout-container">
        <div className="cart-items">
          <h2>Shopping Cart</h2>

          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <p>Your cart is empty</p>
              <Link to="/merchandise" className="shop-btn">
                Start Shopping
              </Link>
            </div>
          ) : (
            <>
              <div className="items-list">
                {cartItems.map(item => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} className="item-image" />
                    <div className="item-details">
                      <h3>{item.name}</h3>
                      <p className="item-category">{item.category}</p>
                      <p className="item-price">${item.price}</p>
                    </div>
                    <div className="item-quantity">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <div className="item-total">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                      title="Remove item"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Shipping</span>
                  <span className="free">FREE</span>
                </div>
                <div className="summary-row">
                  <span>Tax</span>
                  <span>${(getTotalPrice() * 0.08).toFixed(2)}</span>
                </div>
                <div className="summary-row total">
                  <span>Total</span>
                  <span>${(getTotalPrice() * 1.08).toFixed(2)}</span>
                </div>
              </div>
            </>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="checkout-form">
            <h2>Billing Information</h2>

            <form onSubmit={(e) => { e.preventDefault(); handlePlaceOrder(); }}>
              <div className="form-section">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="john@example.com" required />
                </div>
              </div>

              <div className="form-section">
                <div className="form-group">
                  <label>Address</label>
                  <input type="text" placeholder="123 Main Street" required />
                </div>
                <div className="form-group">
                  <label>City</label>
                  <input type="text" placeholder="New York" required />
                </div>
              </div>

              <div className="form-section">
                <div className="form-group">
                  <label>State / Province</label>
                  <input type="text" placeholder="NY" required />
                </div>
                <div className="form-group">
                  <label>ZIP / Postal Code</label>
                  <input type="text" placeholder="10001" required />
                </div>
              </div>

              <div className="form-section">
                <h3>Payment Information</h3>
                <div className="form-group">
                  <label>Card Number</label>
                  <input type="text" placeholder="4532 1234 5678 9010" required />
                </div>
              </div>

              <div className="form-section">
                <div className="form-group">
                  <label>Expiry Date</label>
                  <input type="text" placeholder="MM/YY" required />
                </div>
                <div className="form-group">
                  <label>CVC</label>
                  <input type="text" placeholder="123" required />
                </div>
              </div>

              <button type="submit" className="place-order-btn">
                Place Order (${(getTotalPrice() * 1.08).toFixed(2)})
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
