import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { incrementQuantity, decrementQuantity, removeItem, clearCart } from '../redux/slices/cartSlice';
import { MDBIcon } from 'mdbreact';
import '../../style/cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    navigate('/checkout');
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
      <h1 className="cart-heading text-center display-3" style={{fontFamily:'fantasy', color:'#C51605'}}>Cart</h1>

      <div className="cartWrapper">
        {cart.map((product) => (
          <div key={product.id} className="cartCard">
            <img src={product.image} alt="" className="productImage" />
            <h5 className="productTitle">{product.title.slice(0, 20)}</h5>
            <h5 className="productPrice">${product.price}</h5>
            <button className="removeButton" onClick={() => dispatch(removeItem(product.id))} style={{color:'#E5B836', fontWeight:'bold'}}>
              Remove
            </button>

            <div className="cartItem__incrDec">
              <button className="quantityButton" onClick={() => dispatch(decrementQuantity(product.id))}>
                -
              </button>
              <p className="quantityText"style={{ fontSize:'24px', marginRight:'6px'}}>{product.quantity}</p>
              <button className="quantityButton" onClick={() => dispatch(incrementQuantity(product.id))}>
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cartFooter">
        <div className="d-flex align-items-center">
          <button className="continueButton btn text-white font-bold" onClick={handleContinueCheckout} style={{backgroundColor:'#C51605'}}>
            Continue Checkout
          </button>

          <button className="clearButton btn border ml-2" onClick={() => dispatch(clearCart())}>
            Clear Cart
          </button>
        </div>
        <br />
        <p className="cartFooter__total">
          Total ({getTotal().totalQuantity} items): <strong>${getTotal().totalPrice.toFixed(2)}</strong>
        </p>
      </div>
    </div>
  );
};

export default Cart;
