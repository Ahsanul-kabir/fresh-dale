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
        const url = `https://rocky-badlands-49301.herokuapp.com/addEvents`;
        console.log(eventData)
        alert('Successfully Save')

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
        fetch('https://rocky-badlands-49301.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ width: '50%', marginLeft: "10%" }}>
            <h6 className="bg-warning p-2">Add Product then Refresh this page kindly...</h6>
                <button class="btn btn-info" onClick={() => setProduct(true)}>Add Product</button>
                {
                    display ? <form onSubmit={handleSubmit(onSubmit)}>
                        <p>Name: <input class="form-control"  name="name" defaultValue="Product name" {...register("example")} /></p>
                        <br></br>
                        <p>Product Image: <input class="form-control"  type="file" onChange={handleImageUpload} /></p>
                        <br></br>
                        <br></br>
                        <p>Price: <input class="form-control"  name="price" defaultValue="null" {...register("price")} /></p>
                        <br></br>
                        <button type="submit" class="btn btn-success">Save</button>
                        <br/>
                        <br/>
                        <button class="btn btn-secondary" onClick={() => setProduct(false)}>Close</button>
                    </form> : null
                }
            </div>


            <div style={{ width: '50%',margin:'0 10%' }}>
            <h6 className="bg-warning p-2">After delete then Refresh this page kindly...</h6>
                <button class="btn btn-info" onClick={() => setManage(true)}>Manage</button>

                {
                    manage?products.map(product => <Manage key={product._id} product={product}></Manage>): null
                }
                <button class="btn btn-secondary" onClick={() => setManage(false)}>Close</button>
            </div>
        </div>
    );
};

export default Admin;