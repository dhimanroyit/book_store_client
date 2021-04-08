import React from 'react';
import {Link, useRouteMatch, Route} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus, faEdit, faThLarge} from '@fortawesome/free-solid-svg-icons';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import './Admin.css';


function Admin() {
  const {url, path} = useRouteMatch();
  
  return (
    <div className="admin">
      <div className="sidebar">
        <Link to="/"><h2 className="sidebar__logo">BookStore</h2></Link>
        <div className="sidebar__nav">
          <Link 
            to={`${url}/manageproducts`} 
            className="sidebar__navItem">
              <FontAwesomeIcon 
                className="sidebar__navIcon" 
                icon={faThLarge} />
                Manage Books
          </Link>
          <Link 
            to={`${url}/addproduct`} 
            className="sidebar__navItem">
              <FontAwesomeIcon 
                className="sidebar__navIcon" 
                icon={faPlus} />
                Add Book
          </Link>
          <Link 
            to={`${url}/editbook`} 
            className="sidebar__navItem">
              <FontAwesomeIcon 
                className="sidebar__navIcon" 
                icon={faEdit} />
                Edit Book
          </Link>
        </div>
      </div>
      <div className="admin__page">
        <header className="admin__pageHeader">
          <h2 className="admin__pageTitle">AddBook</h2>
        </header>
        <section className="admin__pageContent">     
          <Route path={`${path}/manageproducts`}>
            <ManageProducts />
          </Route>
          <Route path={`${path}/addproduct`} >
            <AddProduct />           
          </Route>
          <Route path={`${path}/editproduct`} >
            <h1>edit book</h1>
          </Route>
        </section>
      </div>
    </div>
  )
}

export default Admin
