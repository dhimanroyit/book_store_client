import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './ManageProductItem.css';

function ManageProductItem({_id, name, author, price, deleteProduct}) {

 
  return (
    <div className="manageProductItem">
      <p>{name}</p>
      <p>{author}</p>
      <p>${price}</p>
      <div>
        <button className="btnEdit">
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button onClick={() => deleteProduct(_id)}  className="btnDelete">
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
    </div>
  )
}

export default ManageProductItem;
