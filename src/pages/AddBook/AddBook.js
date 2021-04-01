import React from 'react';
import Button from '../../components/Button/Button';
import './AddBook.css';

function AddBook() {
  return (
    <section className="addbook">
      <form action="" className="addbook__form">
        <div className="addbook__inputGroup">
          <label htmlFor="name" className="addbook__label">Name
            <input type="text" id="name" className="addbook__input" placeholder="Enter Name" />
          </label>
          <label htmlFor="author" className="addbook__label">Author
            <input type="text" id="author" className="addbook__input" placeholder="Enter Author" />
          </label>
          <label htmlFor="Price" className="addbook__label">Price
            <input type="text" id="Price" className="addbook__input" placeholder="Enter Price" />
          </label>
          <label className="addbook__label">Add a Book Cover Photo
            <input type="file" id="coverphoto" className="addbook__inputFile"/>
          </label>
        </div>
        <div className="addbook__btn">
          <Button>Save</Button>
        </div>
      </form>
    </section>
  )
}

export default AddBook
