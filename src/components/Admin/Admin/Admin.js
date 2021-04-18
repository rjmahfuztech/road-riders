import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import BookingList from '../BookingList/BookingList';
import OrderList from '../OrderList/OrderList';


const Admin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState({});

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));

    }, []);
    return (
        <div>
            {
                isAdmin ? <OrderList></OrderList> : <BookingList></BookingList>
            }
        </div>
    );
};

export default Admin;