import React, { useEffect, useState } from 'react';
import ServicesCard from '../../../Home/Services/ServicesCard/ServicesCard';
import Navbar from '../../../Shared/Navbar/Navbar';
import Sidebar from '../../Sidebar/Sidebar';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://immense-thicket-36192.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleClick = (event, data) => {
     
        const id = (data._id);
        fetch('https://immense-thicket-36192.herokuapp.com/deleteService', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ id })

        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    if (event.target.parentNode.id === 'service-card') {
                        event.target.parentNode.style.display = 'none';
                    }
                    else if (event.target.id === 'service-card') {
                        event.target.id.style.display = 'none';
                    }
                }
            })
    }

    return (
        <section >
            <Navbar></Navbar>
            <div className="container-fluid row">
                <Sidebar></Sidebar>
                <div className="col-md-9 mt-5 text-center">
                    <h4 className="p-3 text-danger">Click Over to Delete the Service</h4>
                    <div className="row d-flex justify-content-center">
                        <br />
                        {
                            services.map(service => <ServicesCard key={service._id} service={service} handleClick={handleClick}></ServicesCard>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManageServices;