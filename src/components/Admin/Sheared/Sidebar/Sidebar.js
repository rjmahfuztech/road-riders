import React, { useContext, useEffect, useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faClipboardList, faComment, faHome, faPlusSquare, faTh, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../../App';


const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState({});

    useEffect(() => {
        fetch('https://fathomless-cliffs-04770.herokuapp.com/isAdmin', {
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
        <div className="sidebar-style">
            <ul className="list-unstyled">
                <li>
                    <Link className="link" to="/home"><FontAwesomeIcon className="icon" icon={faHome} /> Home</Link>
                </li>
            </ul>
            {
                isAdmin ?
                    <ul className="list-unstyled">
                        <li>
                            <Link className="link" to="/orders"><FontAwesomeIcon className="icon" icon={faClipboardList} /> Order List</Link>
                        </li>
                        <li>
                            <Link className="link" to="/addService"><FontAwesomeIcon className="icon" icon={faPlusSquare} /> Add Service</Link>
                        </li>
                        <li>
                            <Link className="link" to="/addAdmin"><FontAwesomeIcon className="icon" icon={faUserPlus} /> Add Admin</Link>
                        </li>
                        <li>
                            <Link className="link" to="/manage"><FontAwesomeIcon className="icon" icon={faTh} /> Manage Service</Link>
                        </li>
                    </ul>
                    :
                    <ul className="list-unstyled">
                        <li>
                            <Link className="link" to="/book"><FontAwesomeIcon className="icon" icon={faCartPlus} /> Book</Link>
                        </li>
                        <li>
                            <Link className="link" to="/bookingList"><FontAwesomeIcon className="icon" icon={faClipboardList} /> Book List</Link>
                        </li>
                        <li>
                            <Link className="link" to="/review"><FontAwesomeIcon className="icon" icon={faComment} /> Review</Link>
                        </li>
                    </ul>
            }
        </div>
    );
};

export default Sidebar;