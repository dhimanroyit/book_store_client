import React from 'react';
import Search from '../../components/Search/Search';
import './Home.css';

function Home() {
  return (
    <section className="home container">
      <div className="searchBox">
        <Search />
      </div>

    </section>
  )
}

export default Home
