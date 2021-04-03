import React from 'react';
import ManageProductItem from './ManageProductItem/ManageProductItem';
import './ManageProducts.css';

function ManageProducts() {
  return (
    <section className="manageProducts">
      <div className="manageProducts__headingTitle">
        <h3>Book Name</h3>
        <h3>Author Name</h3>
        <h3>Price</h3>
        <h3>Action</h3>
      </div>
      <div className="manageProducts__list">
        <ManageProductItem />
      </div>
    </section>
  )
}

export default ManageProducts;
