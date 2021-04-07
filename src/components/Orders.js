import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('http://localhost:5000/orders?email='+loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <h3>Hey you have: {orders.length} Orders</h3>
            {
                orders.map(order => <li>{order.name} form:{(new Date(order.checkIn).toDateString('dd/MM/yyyy'))} to:{(new Date(order.checkOut).toDateString('dd/MM/yyyy'))}</li>)
            }
        </div>
    );
};

export default Orders;