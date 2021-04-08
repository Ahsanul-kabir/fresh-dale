import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import noImg from '../images/icons/No Image.jpg'
import { useHistory } from 'react-router-dom';

const Event = ({ event }) => {
    const [list, setList] = useState([]);
    const history = useHistory()
    const deleteEvent = id => {

    }

    const handleCheckOut = (id) => {
        history.push(`/checkout/${id}`);
    }
    // console.log(list)
    return (
        <div className="col-md-3 col-lg-3 col-sm-1">
            {/* <h3>{event.name} <button onClick={() => deleteEvent(event._id)}>Delete</button></h3> */}

            <Card style={{ width: '18rem', height: '450px', marginTop: "5rem" }}>
                <Card.Img variant="top" src={event.imageURL || noImg} alt="Image can't load" />
                <Card.Body>
                    <Card.Title>{event.name}</Card.Title>
                </Card.Body>
                <Card.Body>
                    <h4 style={{ float: "left" }}>${event.price}</h4>
                    <Button onClick={() => handleCheckOut(event._id)} style={{ float: "right" }}>
                        <Link style={{ color: 'white' }} to="/checkout">Buy Now</Link>
                    </Button>
                </Card.Body>
            </Card>
        </div>


    );
};

export default Event;