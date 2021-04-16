import React from 'react';
import AddAdmin from '../AddAdmin/AddAdmin';
import AddService from '../AddService/AddService';
import Book from '../Book/Book';
import Sidebar from '../Sidebar/Sidebar';

const Admin = () => {
    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
                {/* <Book></Book> */}
                {/* <AddService></AddService> */}
                <AddAdmin></AddAdmin>
            </div>
        </div>
    );
};

export default Admin;