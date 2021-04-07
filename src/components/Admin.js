import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const eventData = {
            name: data.example,
            imageURL: imageURL
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
    return (
        <div>
            <h1>Add your awesome Event here</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p>Name: <input name="name" defaultValue="New exciting event" {...register("example")} /></p>
                <br></br>
                <p>Product Image: <input type="file" onChange={handleImageUpload} /></p>
                <br></br>
                <input type="submit" />
            </form>
        </div>
    );
};

export default Admin;