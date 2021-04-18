import React, { useState } from 'react';
import Sidebar from '../Sheared/Sidebar/Sidebar';

const AddAdmin = () => {
    const [adminInfo, setAdminInfo] = useState({});

    const handleAdmin = event => {
        fetch('https://fathomless-cliffs-04770.herokuapp.com/addAdmin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(adminInfo)
        })
            .then(result => {
                if (result) {
                    alert('Admin added successfully');
                }
            })
        event.preventDefault();
    }
    const handleAddAdmin = e => {
        const newAdminInfo = { ...adminInfo };
        newAdminInfo[e.target.name] = e.target.value;
        setAdminInfo(newAdminInfo);
    }

    return (
        <div className="margin container">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-7">
                    <h2 className="mb-5">Make Admin</h2>
                    <form className="" onSubmit={handleAdmin}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input onBlur={handleAddAdmin} name="name" type="text" className="form-control" placeholder="Enter admin name" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input onBlur={handleAddAdmin} name="email" type="email" className="form-control" placeholder="Enter admin email" required />
                        </div>
                        <div className="mb-3 text-right">
                            <div className="btn-bg-color">
                                <button type="submit" className="btn text-white btn-style">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAdmin;