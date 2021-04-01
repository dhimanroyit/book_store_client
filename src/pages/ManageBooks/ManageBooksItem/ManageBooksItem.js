import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './ManageBooksItem.css';

function ManageBooksItem() {
  return (
    <div className="manageBooksItem">
      <p>Javascript Everywhere</p>
      <p>Dhiman roy</p>
      <p>$283</p>
      <div>
        <button className="btnEdit"><FontAwesomeIcon icon={faEdit} /></button>
        <button className="btnDelete"><FontAwesomeIcon icon={faTrashAlt} /></button>
      </div>
    </div>
  )
}

export default ManageBooksItem
