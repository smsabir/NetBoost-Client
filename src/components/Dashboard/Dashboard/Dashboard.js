import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { OrderContext, UserContext } from '../../../App';
import Services from '../../Home/Services/Services';
import ServicesCard from '../../Home/Services/ServicesCard/ServicesCard';
import Navbar from '../../Shared/Navbar/Navbar';
import LoadAllOrders from '../LoadAllOrders/LoadAllOrders';
import Sidebar from '../Sidebar/Sidebar';
import "./Dashboard.css";

const Dashboard = () => {
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

    console.log(isAdmin, loggedInUser)

    return (
        <section >
            <Navbar></Navbar>
            <div className="container-fluid row">
                <Sidebar></Sidebar>
                <div className="col-md-9 mt-1 text-center d-flex justify-content-center">
                    <div style={isAdmin? {display: 'none'} : {display:'block'}}>
                    <h4 className="p-3 text-secondary">Click To Order</h4>
                    <Services></Services>
                    </div>
                    <div style={isAdmin? {display: 'block'} : {display:'none'}} className=" text-center p-4 mb-5">
                    <h4 className="p-2 text-secondary">Customer Order List</h4>
                    <LoadAllOrders isAdmin={isAdmin} loggedInUser={loggedInUser}></LoadAllOrders>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
