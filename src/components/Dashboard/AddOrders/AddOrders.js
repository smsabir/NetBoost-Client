import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { OrderContext, UserContext } from '../../../App';
import Navbar from '../../Shared/Navbar/Navbar';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import Sidebar from '../Sidebar/Sidebar';

const AddOrders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useContext(OrderContext);
    const [displayHide, setDisplayHide] = useState(false);
    const [paymentSuccessMsg, setPaymentSuccessMsg] = useState('');

    const handlePayment = (paymentId) => {
        const { name, _id, description } = orders;
        let date = new Date().toDateString();
        console.log(date)
        let newOrder = { ...loggedInUser, prodName: name, prodId: _id, description, paymentId, status: 'pending', orderDate : date }
        console.log(newOrder)

        if (newOrder.prodId) {
            fetch('https://immense-thicket-36192.herokuapp.com/addOrder', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(newOrder)
            })
                .then(res => res.json())
                .then(result => {
                    if (result) {
                        setDisplayHide(true);
                        setPaymentSuccessMsg('Your Order and Payment was Successful!')
                        setOrders([]);
                    }
                })
                .catch(error => {
                    console.error(error)
                })
        }

    }

    console.log(displayHide);
    console.log(loggedInUser);
    console.log(orders);
    return (
        <section >
            <Navbar></Navbar>
            <div className="container-fluid row">
                <Sidebar></Sidebar>
                <div className="col-md-8 p-4 pr-5 mt-5 ml-5 rounded shadow form-div d-flex justify-content-center align-content-center">
                    <div style={displayHide ? { display: 'none' } : { display: 'block' }}>

                        {
                            (orders.hasOwnProperty('_id')) ?
                                <div>
                                    <h5 className="text-secondary text-center">Review Details & Make Payment:</h5>
                                    <img style={{ height: '60px' }} src={`data:image/png;base64,${orders.image.img}`} alt="" />
                                    <h6><b className="text-secondary">Service:</b> {orders.name}</h6>
                                    <p><b className="text-secondary">Service Details:</b> {orders.description} <br />
                                        <b className="text-secondary">Price:</b>
                                    </p>

                                    <div className="d-flex justify-content-start">
                                        <ProcessPayment handlePayment={handlePayment}></ProcessPayment>
                                    </div>
                                </div>

                                :

                                <div className="text-secondary mt-5 text-center">
                                    <h5>Nothing in the Cart!</h5>
                                    <Link to="/dashboard">
                                        <button className="btn btn-primary mt-2">Choose Services</button>
                                    </Link>

                                </div>

                        }

                    </div>

                    <div className="d-flex justify-content-center text-center" >
                        <div style={displayHide ? { display: 'block' } : { display: 'none' }}>
                            <h6 className="text-primary mt-5">{paymentSuccessMsg}</h6>
                            <Link to="/orderHistory">
                                <button className="btn btn-primary mt-2">Check Order History</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddOrders;