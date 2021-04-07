import React, { useEffect, useState } from 'react';
import Event from './Events';


const Home = () => {

    const [events, setEvents] = useState([]);
    const[loading,setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => setEvents(data))
            setLoading(false)
    }, [])

    if (loading) {
        return <div className="loading" style={{margin:"10rem"}}>Loading...</div>
    }

    return (
        <div className="row">
            {
                events.map(event => <Event key={event._id} event={event} loading={loading}></Event>)
            }
        </div>
    );
};

export default Home;