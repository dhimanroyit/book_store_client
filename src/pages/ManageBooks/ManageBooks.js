import React from 'react';
import ManageBooksItem from './ManageBooksItem/ManageBooksItem';
import './ManageBooks.css';

function ManageBooks() {
  return (
    <section className="manageBooks">
      <div className="manageBooks__headingTitle">
        <h3>Book Name</h3>
        <h3>Author Name</h3>
        <h3>Price</h3>
        <h3>Action</h3>
      </div>
      <div className="manageBooks__list">
        <ManageBooksItem />
        <ManageBooksItem />
        <ManageBooksItem />
      </div>
    </section>
  )
}

export default ManageBooks
