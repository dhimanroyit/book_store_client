import React from 'react';
import ProductItem from './ProductItem/ProductItem';
import './ProductList.css';

function ProductList() {
  return (
    <section className="productList container">
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </section>
  )
}

export default ProductList
