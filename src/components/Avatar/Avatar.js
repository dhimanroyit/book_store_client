import React from 'react';
import './Avatar.css';

function Avatar({img}) {
  return (
    <div className="avatar">
      <img src={img} alt="" className="avatar__img"/>
    </div>
  )
}

export default Avatar
