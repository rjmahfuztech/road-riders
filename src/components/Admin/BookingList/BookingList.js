import React, { useEffect, useState } from 'react';
import BookingListInfo from '../BookingListInfo/BookingListInfo';
import Sidebar from '../Sidebar/Sidebar';

const BookingList = () => {
    const [bookingData, setBookingData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setBookingData(data));
    }, []);
    console.log(bookingData);
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