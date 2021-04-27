import React, { useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const AddAdmin = () => {

    const [addAdmin, setAddAdmin] = useState({});

    const handleBlur = e => {
        const newInfo = { ...addAdmin };
        newInfo[e.target.name] = e.target.value;
        setAddAdmin(newInfo);
        console.log(newInfo)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let formData = new FormData()
        formData.append('name', addAdmin.name);
        formData.append('email', addAdmin.email);

        fetch('https://immense-thicket-36192.herokuapp.com/addAdmin', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })

    }

    return (
        <section >
            <Navbar></Navbar>
            <div className="container-fluid row">
                <Sidebar></Sidebar>
                <div className="col-md-8 p-4 pr-5 mt-5 ml-5 rounded shadow form-div">
                    <h5 className="text-brand">Make an Admin</h5>
                    <form onSubmit={(event) => handleSubmit(event)}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Name</label>
                            <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Admin Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Admin Email" />
                        </div>
                        <button type="submit" className="btn btn-secondary mt-2">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddAdmin;