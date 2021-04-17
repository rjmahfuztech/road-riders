import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import ProcessPayment from '../PaymentSystem/ProcessPayment/ProcessPayment';

const Book = () => {
    const [service, setService] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { ById } = useParams();
    const { name, email } = loggedInUser;
    const { title, price, image, description } = service;
    const OrderInfo = {
        ServiceName: title,
        price,
        image,
        description
    };

    // const { register, handleSubmit, formState: { errors } } = useForm();
    // const onSubmit = data => {
    //     console.log(data)
    // };

    useEffect(() => {
        fetch(`http://localhost:5000/service/${ById}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [ById]);

    const handlePaymentSystem = paymentId => {
        const bookingData = { ...loggedInUser, OrderInfo, paymentId, orderTime: new Date() };

        fetch('http://localhost:5000/addOrder', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bookingData)
        })
            .then(result => {
                if(result){
                    alert('Your ordered placed successfully')
                }
            })
    }

    return (
        <div className="container margin">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9">
                <h3 className="mb-5">Book Now</h3>
                    {/* <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control" name="name" defaultValue={name} ref={register({ required: true })} />
                        {errors.name && <span>This field is required</span>}
                        <br />
                        <input className="form-control" name="email" defaultValue={email} ref={register({ required: true })} />
                        {errors.email && <span>This field is required</span>}
                        <br />
                        <input className="form-control" name="serviceTitle" defaultValue={title} ref={register({ required: true })} />
                        {errors.serviceTitle && <span>This field is required</span>}
                        <br />
                        <div className="text-right">
                            <div className="btn-bg-color">
                                <button className="btn btn-style text-white" type="submit">Submit</button>
                            </div>
                        </div>
                    </form> */}
                    <div>
                        <input type="text" className="form-control" defaultValue={name} />
                        <br />
                        <input type="text" className="form-control" defaultValue={email} />
                        <br />
                        <input type="text" className="form-control" defaultValue={title} />
                    </div>
                    <div className="mt-4">
                        <h2>Start Payment</h2>
                        <ProcessPayment price={price} handlePayment={handlePaymentSystem}></ProcessPayment>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;