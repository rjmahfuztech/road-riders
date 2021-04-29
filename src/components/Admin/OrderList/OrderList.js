import React, { useEffect, useState } from 'react';
import Sidebar from '../Sheared/Sidebar/Sidebar';

const OrderList = () => {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch('https://fathomless-cliffs-04770.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setAllOrders(data));
    }, []);



    return (
        <div className="container">
            <div className="margin">
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-10">
                        <h2 className="mb-5">Order List</h2>
                        <div id="up">

                        </div>
                        <div>
                            {
                                allOrders.length ?
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Name</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Service</th>
                                                <th scope="col">Payment Id</th>
                                                <th scope="col">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                allOrders.map(orders =>
                                                    <tr key={orders._id}>
                                                        <td>{orders.name}</td>
                                                        <td>{orders.email}</td>
                                                        <td>{orders.OrderInfo?.ServiceName}</td>
                                                        <td>{orders.paymentId}</td>
                                                        <td>
                                                            <select className="form-select" aria-label="Default select example">
                                                                <option value="Pending">Pending</option>
                                                                <option value="On going">On going</option>
                                                                <option value="Done">Done</option>
                                                            </select>
                                                            {/* {orders.orderStatus} */}
                                                            
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                    :
                                    <div className="text-center text-secondary">
                                        <h4>No orders yet</h4>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderList;