import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import Manage from './Manage';

const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const [display, setProduct] = useState(false);
    const [manage, setManage] = useState(false);

    const onSubmit = data => {
        const eventData = {
            name: data.example,
            imageURL: imageURL,
            price: data.price,
        };
        const url = `http://localhost:5000/addEvents`;
        console.log(eventData)

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side response', res))

    };

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '1bb3f8985c143286cd3c766a76623fec');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const [products, setEvents] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ width: '50%', marginLeft: "10%" }}>
                <button onClick={() => setProduct(true)}>Add Product</button>
                {
                    display ? <form onSubmit={handleSubmit(onSubmit)}>
                        <p>Name: <input name="name" defaultValue="Product name" {...register("example")} /></p>
                        <br></br>
                        <p>Product Image: <input type="file" onChange={handleImageUpload} /></p>
                        <br></br>
                        <br></br>
                        <p>Price: <input name="price" defaultValue="null" {...register("price")} /></p>
                        <br></br>
                        <button type="submit">Save</button>
                        <br/>
                        <br/>
                        <button onClick={() => setProduct(false)}>Close</button>
                    </form> : null
                }
            </div>


            <div style={{ width: '50%' }}>
                <button onClick={() => setManage(true)}>Manage</button>

                {
                    manage?products.map(product => <Manage key={product._id} product={product}></Manage>): null
                }
                <button onClick={() => setManage(false)}>Close</button>
            </div>
        </div>
    );
};

export default Admin;