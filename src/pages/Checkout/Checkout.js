import React, {useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Button from '../../components/Button/Button';
import {signInContext} from '../../context/SignInContext';
import './Checkout.css';

function Checkout() {
  const {productId} =useParams();
  const {signInUser} = useContext(signInContext);
  const [product, setProduct] = useState(null);
  const [order, setOrder] = useState({
    userEmail: signInUser.email,
    userName: signInUser.name,
  })


  useEffect(() => {
    axios.get(`/product/${productId}`)
      .then(singleProduct => {
        const {name, author, price,} = singleProduct.data
        setProduct(singleProduct.data);
        setOrder({
          ...order,
          productName: name,
          productAuthor: author,
          productPrice: price,
          quantity: 1
        })
      })
      .catch(err => console.log(err))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const orderHandler = () => {
    const orderData = {
      ...order,
      orderTime: new Date(),
    }
    axios.post("/order", orderData)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err))
  }

  return (
    <section className="checkout container">
      <h2 className="checkout__title">Checkout</h2>
      <div className="checkout__box">
        <header className="checkout__productTitle">
          <h4>Description</h4>
          <h4>Quantity</h4>
          <h4>Price</h4>
        </header>
        {product ? (
          <>
          <div className="checkout__productItem">
            <p>{product.name}</p>
            <p>1</p>
            <p>${product.price}</p>
          </div>
          <div className="checkout__total">
            <p>Total</p>
            <p>${product.price}</p>
          </div>
          </>
        ): <p>there is no content</p> }
      </div>
      <div className="checkout__btn">
        <Button click={orderHandler}>Checkout</Button>
      </div>
    </section>
  )
}

export default Checkout
