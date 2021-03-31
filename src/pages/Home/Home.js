import React from 'react';
import ProductList from '../../components/ProductList/ProductList';
import Search from '../../components/Search/Search';
import './Home.css';

function Home() {
  return (
    <section className="home container">
      <div className="searchBox">
        <Search />
      </div>
      <ProductList />

    </section>
  )
}

export default Home
