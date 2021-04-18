import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import BookingListInfo from '../BookingListInfo/BookingListInfo';
import Sidebar from '../Sheared/Sidebar/Sidebar';

const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [bookingData, setBookingData] = useState([]);

    useEffect(() => {
        fetch('https://fathomless-cliffs-04770.herokuapp.com/orderByEmail', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: loggedInUser.email})
        })
            .then(res => res.json())
            .then(data => setBookingData(data));
    }, [loggedInUser.email]);

    return (
        <div className="container margin">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9">
                    <h2 className="mb-5">Service List</h2>
                    {bookingData.length ?
                        <div className="row">
                            {
                                bookingData.map(book => <BookingListInfo key={book._id} book={book}></BookingListInfo>)
                            }
                        </div>
                        :
                        <div className="text-secondary text-center">
                            <h4>No bookings yet</h4>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default BookingList;