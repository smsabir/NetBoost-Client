import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Navbar from '../../Shared/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';


const AddReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [info, setInfo] = useState({});
    const [stars, setStars] = useState(0);
    const [added, setAdded] = useState(false);

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
        console.log(newInfo)
    }
    const handleFileChange = (e) => {
        const value = parseInt(e.target.value);
        setStars(value);
        console.log(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData()
        formData.append('title', info.title);
        formData.append('description', info.review);
        formData.append('stars', stars);
        formData.append('photo', loggedInUser.photoURL);

        console.log(formData);

        fetch('https://immense-thicket-36192.herokuapp.com/addReview', {
            method: 'POST',

            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setAdded(true);
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
                    <div style={added ? { display: 'none' } : { display: 'block' }}>
                        <h5 className="text-brand">Post Your Review</h5>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Job Title</label>
                                <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="Title" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Description</label>
                                <textarea onBlur={handleBlur} type="text" className="form-control" rows="3" cols="20" name="review" placeholder="Your Review" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Choose Ratings: </label>
                                <select name="stars" id="stars" onChange={handleFileChange}>
                                    <option value='1'>1 Star</option>
                                    <option value="2">2 Stars</option>
                                    <option value="3">3 Stars</option>
                                    <option value="4">4 Stars</option>
                                    <option value="5">5 Stars</option>
                                </select>

                            </div>
                            <button type="submit" className="btn btn-secondary ">Submit</button>
                        </form>
                    </div>
                    <div className="text-center" style={added ? { display: 'block' } : { display: 'none' }} >
                        <p className="text-center" style={{ color: 'green', marginTop: '150px' }}>Thank you for your Feedback!</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AddReview;