import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';

import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { Button } from '@material-ui/core';
import { useParams } from 'react-router';


const Checkout = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {

        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    const { id } = useParams();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [selectedDate, setSelectedDate] = useState({
        checkIn: new Date(),
        checkOut: new Date()
    });

    const handleCheckInDate = (date) => {
        const newDate = { ...selectedDate };
        newDate.checkIn = date;
        setSelectedDate(newDate);
    };

    const handleCheckOutDate = (date) => {
        const newDate = { ...selectedDate };
        newDate.checkOut = date;
        setSelectedDate(newDate);
    };
    const [currentProduct, setCurrentProduct] = useState({})
    useEffect(() => {
        let Product = events.filter(prod => prod._id === id);
        setCurrentProduct(Product[0])
    }, [events])



    const handleCheckout = () => {
        const newOrders = { ...loggedInUser, ...selectedDate };
        fetch('http://localhost:5000/addOrders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrders)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            });
    }
    return (
        <div>
            <h1>hi {loggedInUser.name} checkout</h1>
            <h1>ID : {id}</h1>
            <h1>Name:{currentProduct?.name}</h1>
            <h1>price:{currentProduct?.price}</h1>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="CheckIn Date"
                        value={selectedDate.checkIn}
                        onChange={handleCheckInDate}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="CheckOut Date"
                        format="dd/MM/yyyy"
                        value={selectedDate.checkOut}
                        onChange={handleCheckOutDate}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </Grid>
                <Button onClick={handleCheckout} variant="contained" color="primary">Checkout</Button>
            </MuiPickersUtilsProvider>

        </div>
    );
};

export default Checkout;