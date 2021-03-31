import React from 'react'
import Button from '../../Button/Button'
import img from '../../../assets/img/product.png';
import './ProductItem.css';

function ProductItem() {
  return (
    <section className="product">
      <div className="product__media">
        <img src={img} alt="" className="product__img"/>
      </div>
      <h2 className="product__title">JavaScript Everywhere</h2>
      <p className="product__txt">Adam D. Scottark Lutz</p>
      <div className="product__buyOption">
        <p className="product__price">$234</p>
        <Button>Buy Now</Button>
      </div>
    </section>
  )
}

export default ProductItem
