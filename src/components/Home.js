// import React from 'react';
// import Product from './Product';
// import Search from './Search';

// const Home = () => {
//     return (
//         <div>
//             <Search/>
//             <Product/>
//         </div>
//     );
// };

// export default Home;

import React, { useEffect, useState } from 'react';
import Event from './Events';


const Home = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    return (
        <div className="row">
            {
                events.map(event => <Event event={event}></Event>)
            }
        </div>
    );
};

export default Home;