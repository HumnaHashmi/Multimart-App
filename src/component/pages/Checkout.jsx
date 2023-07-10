import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const OrderSummary = ({ cart }) => {
  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      {cart.map((product) => (
        <div key={product.id}>
          <p>{product.title}</p>
          <p>Quantity: {product.quantity}</p>
          <p>Price: ${product.price}</p>
          <hr />
        </div>
      ))}
      <p className="total-amount">
        Total ({getTotal().totalQuantity} items): <strong>${getTotal().totalPrice.toFixed(2)}</strong>
      </p>
    </div>
  );
};

const Checkout = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const cart = useSelector((state) => state.cart);

  const handleCheckout = (e) => {
    e.preventDefault();
    // Process the checkout logic, such as submitting the form data and making the payment
    console.log('Checkout form submitted!');
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Address:', address);
    // Add your logic to handle the checkout process here
  };

  return (
    <div className="checkout">
      <h1 className="checkout-heading">Checkout</h1>

      <div className="checkout-form">
        <form onSubmit={handleCheckout}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            ></textarea>
          </div>

          {/* Add more form fields for payment details, shipping options, etc. */}

          <button type="submit" className="btn-primary">
            Place Order
          </button>
        </form>

        <OrderSummary cart={cart} />
      </div>
    </div>
  );
};

export default Checkout;
