import React, { useEffect, useState } from 'react';
import Event from './Events';


const Home = () => {

    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    // https://rocky-badlands-49301.herokuapp.com
    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => setEvents(data))
        setLoading(false)
    }, [])

    if (loading) {
        return <div className="loading" style={{ margin: "10rem" }}>Loading...</div>
    }

    return (
        <div style={{marginLeft:"2%"}}>
            <div className="row">
                <form class="form-inline" style={{margin:"10px auto"}}>
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
            <div className="row">
                {
                    events.map(event => <Event key={event._id} event={event}></Event>)
                }
            </div>
        </div>

    );
};

export default Home;