import React from 'react';
import Button from '../../components/Button/Button';
import './Checkout.css';

function Checkout() {
  return (
    <section className="checkout container">
      <h2 className="checkout__title">Checkout</h2>
      <div className="checkout__box">
        <header className="checkout__productTitle">
          <h4>Description</h4>
          <h4>Quantity</h4>
          <h4>Price</h4>
        </header>
        <div className="checkout__productItem">
          <p>Eloquent Javascript</p>
          <p>1</p>
          <p>$230</p>
        </div>
        <div className="checkout__total">
          <p>Total</p>
          <p>$230</p>
        </div>
      </div>
      <div className="checkout__btn">
        <Button>Checkout</Button>
      </div>
    </section>
  )
}

export default Checkout
