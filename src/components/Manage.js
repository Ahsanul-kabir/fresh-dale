import React from 'react';

const Manage = ({ product }) => {
    const deleteEvent = id => {
        console.log(id)
        fetch(`http://localhost:5000/deleteEvent/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => alert('Deleted Successfully'))
    }
    return (
        <div style={{ border: '2px solid orange', width: '90%' }}>
            <h1>{product.name}</h1>
            <h1>{product.price}</h1>

            <button onClick={() => deleteEvent(product._id)}>Delete</button>
        </div>
    );
};

export default Manage;