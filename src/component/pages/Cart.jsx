import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Updated import
import { incrementQuantity, decrementQuantity, removeItem, clearCart } from '../redux/slices/cartSlice';
import { MDBIcon } from 'mdbreact';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Updated hook
  const cart = useSelector((state) => state.cart);

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  const handleContinueCheckout = () => {
    navigate('/checkout'); // Use navigate to navigate to the checkout page
  };

  if (cart.length === 0) {
    return (
      <div className="text-center mt-5">
        <h3 className="fs-bold">
          Your Shopping <MDBIcon icon="shopping-bag" /> is Empty
        </h3>
      </div>
    );
  }

  return (
    <div>
      <h1>Cart</h1>

      <div className="cartWrapper">
        {cart.map((product) => (
          <div key={product.id} className="cartCard">
            <img src={product.image} alt="" />
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => dispatch(removeItem(product.id))}
            >
              Remove
            </button>

            <div className="cartItem__incrDec">
              <button
                className="btn btn-sm"
                onClick={() => dispatch(decrementQuantity(product.id))}
              >
                <p>-</p>
              </button>
              <p>{product.quantity}</p>
              <button
                className="btn btn-sm"
                onClick={() => dispatch(incrementQuantity(product.id))}
              >
                <p>+</p>
              </button>
            </div>
          </div>
        ))}
        <div className="cartFooter">
          <div className="cartFooter__buttons">
            <button className="btn btn-primary" onClick={handleContinueCheckout}>
              Continue Checkout
            </button>
            <button className="btn btn-danger" style={{ marginLeft: '23px' }} onClick={() => dispatch(clearCart())}>
              Clear Cart
            </button>
          </div>
          <br />
          <p className="cartFooter__total">
            Total ({getTotal().totalQuantity} items): <strong>${getTotal().totalPrice.toFixed(2)}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
