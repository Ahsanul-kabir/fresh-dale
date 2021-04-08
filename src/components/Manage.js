import React from 'react';

const Manage = ({ product }) => {
    const deleteEvent = id => {
        console.log(id)
        fetch(`https://rocky-badlands-49301.herokuapp.com/deleteEvent/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => alert('Deleted Successfully'))
    }
    return (
        <div style={{ border: '1px solid gray', width: '90%',margin:"10px",padding:"5px" }}>
            <h3 style={{color:"orange"}}>{product.name}</h3>
            <h3 style={{color:"orange"}}>{product.price}</h3>

            <button class="btn btn-danger" onClick={() => deleteEvent(product._id)}>Delete</button>
        </div>
    );
};

export default Manage;