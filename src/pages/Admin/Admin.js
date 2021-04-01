import React from 'react';
import {Link, useRouteMatch, Route} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus, faEdit, faThLarge} from '@fortawesome/free-solid-svg-icons';
import './Admin.css';
import AddBook from '../AddBook/AddBook';

function Admin() {
  const {url, path} = useRouteMatch();
  
  console.log(url, path);
  return (
    <div className="admin">
      <div className="sidebar">
        <h2 className="sidebar__logo">BookStore</h2>
        <div className="sidebar__nav">
          <Link to={`${url}/managebooks`} className="sidebar__navItem"> <FontAwesomeIcon className="sidebar__navIcon" icon={faThLarge} />Manage Books</Link>
          <Link to={`${url}/addbook`} className="sidebar__navItem"><FontAwesomeIcon className="sidebar__navIcon" icon={faPlus} />Add Book</Link>
          <Link to={`${url}/editbook`} className="sidebar__navItem"><FontAwesomeIcon className="sidebar__navIcon" icon={faEdit} />Edit Book</Link>
        </div>
      </div>
      <div className="admin__page">
        <header className="admin__pageHeader">
          <h2 className="admin__pageTitle">AddBook</h2>
        </header>
        <section className="admin__pageContent">
          <Route path={`${path}/managebooks`}>
            <h1>manage books</h1>
          </Route>
          <Route path={`${path}/addbook`} >
            <AddBook />            
          </Route>
          <Route path={`${path}/editbook`} >
          <h1>edit book</h1>
          </Route>
        </section>
      </div>
    </div>
  )
}

export default Admin
