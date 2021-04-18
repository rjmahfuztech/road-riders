import React, { useEffect, useState } from 'react';
import './ManageService.css';
import Sidebar from '../Sheared/Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ManageService = () => {
    const [manageService, setManageService] = useState([]);

    useEffect(() => {
        fetch('https://fathomless-cliffs-04770.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setManageService(data));
    }, []);

    const handleService = (event, id) => {
        fetch(`https://fathomless-cliffs-04770.herokuapp.com/delete/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    event.target.parentNode.style.display = 'none';
                    alert('Service deleted successfully')
                }
            })
    }
    return (
        <div className="container">
            <div className="margin">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-9">
                        <h2 className="mb-5">Manage Service</h2>
                        <div>
                            {
                                manageService.length ?
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">No</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                manageService.map((service, index) =>
                                                    <tr key={service._id}>
                                                        <th>{index + 1}</th>
                                                        <td>{service.title}</td>
                                                        <td>{service.price}</td>
                                                        <td><button onClick={(event) => handleService(event, service._id)} className="btn-action"><FontAwesomeIcon className="icon" icon={faTrashAlt} /></button></td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                    :
                                    <div className="text-center text-secondary">
                                        <h4>No service yet</h4>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageService;