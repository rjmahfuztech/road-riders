import React from 'react';
import './BookingListInfo.css';

const BookingListInfo = ({ book }) => {
    const { image, ServiceName, description } = book.OrderInfo;
    
    return (
        <div className="col-md-6">
            <div className="order-info">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <img style={{ height: '70px' }} src={`data:image/jpeg;base64,${image.img}`} alt="" />
                    </div>
                    <div>
                        <span>{book.orderStatus}</span>
                    </div>
                </div>
                <h4>{ServiceName}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default BookingListInfo;