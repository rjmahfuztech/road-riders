import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faClipboardList, faHome, faPlusSquare, faTh, faUserPlus } from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => {
    return (
        <div className="sidebar-style">
            <ul className="list-unstyled">
                <li>
                    <Link className="link" to="/home"><FontAwesomeIcon className="icon" icon={faHome} /> Home</Link>
                </li>
                <li>
                    <Link className="link" to="/book"><FontAwesomeIcon className="icon" icon={faCartPlus} /> Book</Link>
                </li>
                <li>
                    <Link className="link" to="/bookingList"><FontAwesomeIcon className="icon" icon={faClipboardList} /> Book List</Link>
                </li>
                <li>
                    <Link className="link" to="/review"><FontAwesomeIcon className="icon" icon={faClipboardList} /> Review</Link>
                </li>
                <li>
                    <Link className="link" to="/order"><FontAwesomeIcon className="icon" icon={faClipboardList} /> Order List</Link>
                </li>
                <li>
                    <Link className="link" to="/service"><FontAwesomeIcon className="icon" icon={faPlusSquare} /> Add Service</Link>
                </li>
                <li>
                    <Link className="link" to="/addAdmin"><FontAwesomeIcon className="icon" icon={faUserPlus} /> Add Admin</Link>
                </li>
                <li>
                    <Link className="link" to="/manage"><FontAwesomeIcon className="icon" icon={faTh} /> Manage Service</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;