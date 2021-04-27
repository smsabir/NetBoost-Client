import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Navbar from '../../Shared/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import OrderHistoryCard from './OrderHistoryCard/OrderHistoryCard';


const OrderHistory = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [loadedData, setLoadedData] = useState([]);

    useEffect(() => {
        fetch('https://immense-thicket-36192.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(loggedInUser)
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])

    useEffect(() => {
        fetch('https://immense-thicket-36192.herokuapp.com/getOrders', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ isAdmin, email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setLoadedData(data);
            })
    }, [loggedInUser.email || isAdmin]);

    console.log(isAdmin, loggedInUser)

    return (
        <section >
            <Navbar></Navbar>
            <div className="container-fluid row">
                <Sidebar></Sidebar>
                <div className="col-md-9 mt-1 text-center d-flex justify-content-center">
                    <div className="container">
                        <h3>Order history</h3>
                        <div className="row d-flex justify-content-center text-left">
                            {
                                loadedData.length === 0? 
                                <p>No order Found!</p>
                               : loadedData.map(data => <OrderHistoryCard key={data._id} data={data}></OrderHistoryCard>)
                            }
                        </div>
                    </div>
                </div>

            </div>
        </section>

    );
};

export default OrderHistory;