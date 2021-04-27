import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import ReviewCard from './ReviewCard/ReviewCard';

// const reviewData = [
//     {
//         name: 'Mannie M',
//         review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//         star: 5,
//         img: 'https://i.ibb.co/Kzh1Qkv/wilson.png' 
//     },
//     {
//         name: 'Mannie M',
//         review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//         star: 5,
//         img: 'https://i.ibb.co/Kzh1Qkv/wilson.png' 
//     },
//     {
//         name: 'Mannie M',
//         review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//         star: 5,
//         img: 'https://i.ibb.co/Kzh1Qkv/wilson.png' 
//     }
// ]

const CustomerReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext || "");
    const [reviewData, setReviewData] = useState('');
    const isHome = true;

    useEffect(() => {
        fetch('https://immense-thicket-36192.herokuapp.com/getReviews', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ isHome, email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReviewData(data);
            })
    }, []);

    console.log(reviewData);

    return (
        <section className="container text-center mt-5 pt-5">
            <h4>Testimonials</h4>
            <h2>Feedback from Our Customers</h2>
            <p><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, harum molestiae? <br /> Porro harum dignissimos tempore modi! Vero consequatur itaque ad.</small></p>

            <div className="row d-flex justify-content-center pt-5">
                {
                    reviewData.length === 0 ?
                        <div class="spinner-grow" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                        : reviewData.map(review => <ReviewCard key={review._id} review={review} />)
                }
            </div>
        </section>

    );
};

export default CustomerReview;