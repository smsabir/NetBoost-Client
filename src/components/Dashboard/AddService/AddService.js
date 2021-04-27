import React, { useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import "./AddService.css"

const AddService = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const [added, setAdded] = useState(false);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
        console.log(newInfo)
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
        console.log(newFile)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('description', info.description);

        console.log(formData);

        fetch('https://immense-thicket-36192.herokuapp.com/addServices', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setAdded(true);
                document.forms['addProduct'].reset();
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
                <div className="col-md-8 p-4 pr-5 mt-5 ml-5 rounded shadow form-div ">
                    <div style={added ? { display: 'none' } : { display: 'block' }}>
                        <h5 className="text-secondary">Add a Service</h5>
                        <form name="addProduct" onSubmit={(e) => handleSubmit(e)}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Name</label>
                                <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Service Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Description</label>
                                <textarea onBlur={handleBlur} type="text" row="2" col="20" className="form-control" name="description" placeholder="Description" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Upload an image</label>
                                <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                            </div>
                            <button type="submit" className="btn btn-secondary mt-2">Submit</button>
                        </form>
                    </div>

                    <div className="text-center" style={added ? { display: 'block' } : { display: 'none' }} >
                        <p className="text-center" style={{ color: 'green', marginTop: '150px' }}>Your Service has been Added Successfully!</p>
                        <button onClick={() => setAdded(false)} className="btn btn-secondary">Add New</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddService;