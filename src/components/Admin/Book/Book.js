import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../../App";
import Sidebar from "../Sheared/Sidebar/Sidebar";
import ProcessPayment from "../PaymentSystem/ProcessPayment/ProcessPayment";

const Book = () => {
  const [service, setService] = useState({});
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [orderStatus, setOrderStatus] = useState("Pending");
  const { ById } = useParams();
  const { displayName, email } = loggedInUser;
  const name = displayName;
  const { title, price, image, description } = service;

  const OrderInfo = {
    ServiceName: title,
    price,
    image,
    description,
  };
  console.log("logggg", loggedInUser);
  useEffect(() => {
    fetch(`https://fathomless-cliffs-04770.herokuapp.com/service/${ById}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [ById]);

  const handlePaymentSystem = (paymentId) => {
    const bookingData = {
      name,
      email,
      OrderInfo,
      orderStatus,
      paymentId,
      orderTime: new Date(),
    };

    fetch("https://fathomless-cliffs-04770.herokuapp.com/addOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    }).then((result) => {
      if (result) {
        alert("Your ordered placed successfully");
      }
    });
  };

  return (
    <div className="container">
      <div className="margin">
        <div className="row">
          <div className="col-md-3">
            <Sidebar></Sidebar>
          </div>
          <div className="col-md-9">
            <h3 className="mb-5">Book Now</h3>
            <div>
              <input type="text" className="form-control" defaultValue={name} />
              <br />
              <input
                type="text"
                className="form-control"
                defaultValue={email}
              />
              <br />
              <input
                type="text"
                className="form-control"
                defaultValue={title}
              />
            </div>
            <div className="mt-4">
              <h2>Start Payment</h2>
              <ProcessPayment
                price={price}
                handlePayment={handlePaymentSystem}
              ></ProcessPayment>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
