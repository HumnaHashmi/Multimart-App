import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import "../../style/checkout.css"
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
    <div className="order-summary mt-5">
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
  const [cardNumber, setCardNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvv, setCVV] = useState('');
  const [billingName, setBillingName] = useState('');
  const [selectCountry, setSelectCountry] = useState('');
  const [selectCity, setSelectCity] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const cart = useSelector((state) => state.cart);

  const handleCheckout = (e) => {
    e.preventDefault();
    // Process the checkout logic, such as submitting the form data and making the payment
    console.log('Checkout form submitted!');
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Address:', address);
    console.log('Card Number:', cardNumber);
    console.log('Expiration Date:', expiration);
    console.log('CVV Code:', cvv);
    console.log('Billing Name:', billingName);
    console.log('Select Country:', selectCountry);
    console.log('Select City:', selectCity);
    console.log('Billing Address:', billingAddress);
    // Add your logic to handle the checkout process here
  };

  return (
    <div className="checkout">
      <h1 className="cart-heading text-center display-3" style={{fontFamily:'fantasy', color:'#C51605'}}
      >Checkout</h1>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
          <legend >Customer Information</legend>
            <form onSubmit={handleCheckout}>
              <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  placeholder="Enter your first name"
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
                  placeholder="Enter your last name"
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
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <textarea
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                  placeholder="Enter your address"
                ></textarea>
              </div>

              <fieldset>
                <legend>Payment Information</legend>
                <div className="form-group">
                  <label htmlFor="cardNumber">Credit Card Number:</label>
                  <input
                    type="text"
                    id="cardNumber"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    required
                    placeholder="Enter your card number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="expiration">Expiration Date:</label>
                  <input
                    type="text"
                    id="expiration"
                    value={expiration}
                    onChange={(e) => setExpiration(e.target.value)}
                    required
                    placeholder="MM/YY"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cvv">CVV Code:</label>
                  <input
                    type="text"
                    id="cvv"
                    value={cvv}
                    onChange={(e) => setCVV(e.target.value)}
                    required
                    placeholder="Enter the CVV code"
                  />
                </div>
              </fieldset>

              <fieldset>
                <legend>Billing Address</legend>
                <div className="form-group">
                  <label htmlFor="billingName">Billing Name:</label>
                  <input
                    type="text"
                    id="billingName"
                    value={billingName}
                    onChange={(e) => setBillingName(e.target.value)}
                    required
                    placeholder="Enter the billing name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="selectCountry">Select Country:</label>
                  <input
                    type="text"
                    id="selectCountry"
                    value={selectCountry}
                    onChange={(e) => setSelectCountry(e.target.value)}
                    required
                    placeholder="Enter the country"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="selectCity">Select City:</label>
                  <input
                    type="text"
                    id="selectCity"
                    value={selectCity}
                    onChange={(e) => setSelectCity(e.target.value)}
                    required
                    placeholder="Enter the city"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="billingAddress">Address:</label>
                  <textarea
                    id="billingAddress"
                    value={billingAddress}
                    onChange={(e) => setBillingAddress(e.target.value)}
                    required
                    placeholder="Enter the billing address"
                  ></textarea>
                </div>
              </fieldset>

              <button type="submit" className="btn btn-primary"
              style={{ backgroundColor: '#C51605', fontWeight: 600 }}>
                Place Order
              </button>
            </form>
          </div>

          <div className="col-md-6">
            <OrderSummary cart={cart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
