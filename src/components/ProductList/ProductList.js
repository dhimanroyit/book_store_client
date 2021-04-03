import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import ProductItem from './ProductItem/ProductItem';
import './ProductList.css';
import Loader from '../Loader/Loader';

function ProductList() {
  const [products, setProducts] = useState(null);
  const history = useHistory();

  useEffect(() => {
    axios.get('/products')
      .then(productsData => {
        const {data} = productsData;
        setProducts(data);
      })
  }, [])
  const productBuyHandler = (id) => {
    history.replace(`checkout/${id}`)
  }

  return (
    <section className="productList container">
      {products ? products.map(product => {
        return <ProductItem 
                key={product._id} 
                {...product} 
                productBuyHandler={productBuyHandler} />
      }):<Loader />}
      
    </section>
  )
}

export default ProductList
