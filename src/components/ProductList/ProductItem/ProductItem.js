import React from 'react'
import Button from '../../Button/Button'
import './ProductItem.css';

function ProductItem({_id, name, author, price, photo, productBuyHandler}) {
  return (
    <section className="product">
      <div className="product__media">
        <img src={photo} alt="" className="product__img"/>
      </div>
      <h2 className="product__title">{name}</h2>
      <p className="product__txt">{author}</p>
      <div className="product__buyOption">
        <p className="product__price">${price}</p>
        <Button click={() => productBuyHandler(_id)}>Buy Now</Button>
      </div>
    </section>
  )
}

export default ProductItem
