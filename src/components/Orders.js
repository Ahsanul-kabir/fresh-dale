import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('http://localhost:5000/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div style={{ margin: "0 auto" }} className="col-md-3 col-lg-3 col-sm-1">
            <h3>Hey <strong style={{color:'orange'}}>{loggedInUser.name}</strong> You have: {orders.length} Orders To Process</h3>
            <div className="row">
                {
                    orders.map(order =>
                        <div>
                            {/* <h2> User Who Orders: {order.name}</h2> */}

                            <h5 style={{ border: '2px solid orange', width: '100%' }}>
                                <br />
                                Order Place Date: {(new Date(order.checkIn).toDateString('dd/MM/yyyy'))}
                                <br />
                                Delevary Date: {(new Date(order.checkOut).toDateString('dd/MM/yyyy'))}
                            </h5>

                        </div>)
                }
            </div>
        </div>
    );
};

export default Orders;