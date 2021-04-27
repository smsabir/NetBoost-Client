import { faCalendar, faCar, faCartPlus, faCog, faFile, faFileAlt, faHistory, faSignOutAlt, faStar, faStreetView, faUserMd, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Sidebar.css';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    
    useEffect(() => {
        fetch('https://immense-thicket-36192.herokuapp.com/isAdmin',{
            method: 'POST',
            headers: {'content-type' : 'application/json'},
            body:JSON.stringify(loggedInUser)
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])




    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                { 
                 !isAdmin && <div>
                    <li>
                    <Link to="/addOrders" className="" >
                        <FontAwesomeIcon icon={faCartPlus} /> <span>Orders </span>
                    </Link>
                </li>
                <li>
                    <Link to="/orderHistory" className=" " >
                        <FontAwesomeIcon icon={faHistory} /> <span>Order History</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addReview" className=" " >
                        <FontAwesomeIcon icon={faStar} /> <span>Review</span>
                    </Link>
                </li>
                </div>
                    
                }
                {
                    isAdmin && <div>
                        <li>
                            <Link to="/dashboard" className=" ">
                                <FontAwesomeIcon icon={faFileAlt} /> <span>Order List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addService" className=" ">
                                <FontAwesomeIcon icon={faCalendar} /> <span>Add Service</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addAdmin" className=" ">
                                <FontAwesomeIcon icon={faUsers} /> <span>Make Admin</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/manage-services" className=" ">
                                <FontAwesomeIcon icon={faFile} /> <span>Manage Services</span>
                            </Link>
                        </li>

                    </div>
                }
            </ul>
            <div>
                <Link to="/" className=" "><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;