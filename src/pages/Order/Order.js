import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import OrderItem from './OrderItem/OrderItem';
import { signInContext } from '../../context/SignInContext';

import './Order.css';

function Order() {
  const [orderList, setOrderList] = useState(null)
  const {signInUser} = useContext(signInContext)
  useEffect(() => {
    axios.get(`/orders/${signInUser.email}`)
      .then(res => {
        setOrderList(res.data)
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className="order container">
      <div className="order__box">
        {orderList && orderList.map(order => {
          return <OrderItem key={order._id} {...order} />
        })}
      </div>
    </div>
  )
}

export default Order
