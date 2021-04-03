import React from 'react';
import './OrderItem.css';

function OrderItem({
  productAuthor, 
  productName,
  productPrice,
  quantity,
  userEmail,
  userName,
  orderTime
}) {
  const date = new Date(orderTime)
  return (
    <div className="order__item">
      <p>Product Name: {productName}</p>
      <p>Author: {productAuthor}</p>
      <p>Price: ${productPrice}</p>
      <p>Quantity: {quantity}</p>
      <p>Order Date: {date.getDate()}</p>
      <p>Order By: {userEmail}</p>
    </div>
  )
}

export default OrderItem
