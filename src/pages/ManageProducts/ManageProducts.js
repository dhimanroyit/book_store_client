import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ManageProductItem from './ManageProductItem/ManageProductItem';
import './ManageProducts.css';

function ManageProducts() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios.get('/products')
      .then(productsData => {
        const {data} = productsData;
        setProducts(data);
      })
  }, [products])
  const deleteProductHandler = (id) => {
    axios.delete(`/product/${id}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err))
  }
  return (
    <section className="manageProducts">
      <div className="manageProducts__headingTitle">
        <h3>Book Name</h3>
        <h3>Author Name</h3>
        <h3>Price</h3>
        <h3>Action</h3>
      </div>
      <div className="manageProducts__list">
        {products && products.map(product => {
          return <ManageProductItem 
                  key={product._id} 
                  {...product} 
                  deleteProduct={deleteProductHandler} />
        })}
      </div>
    </section>
  )
}

export default ManageProducts;
