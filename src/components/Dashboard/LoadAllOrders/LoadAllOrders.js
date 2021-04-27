import React, { useEffect, useState } from 'react';
import ShowData from './ShowData/ShowData';
import './LoadData.css';

const LoadAllOrders = ({ isAdmin, loggedInUser }) => {

    const [loadedData, setLoadedData] = useState([]);

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
    }, [isAdmin]);

    const handleUpdate = (id, value) => {
        console.log(id, value)
        const newData = { id: id, value: value };
        fetch(`https://immense-thicket-36192.herokuapp.com/update/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    console.log(result)
                    //     loadAllProducts();
                    //     const update = document.getElementById('update');
                    // update.innerHTML = "";
                }
            })
    }

    console.log(isAdmin, loggedInUser.email);
    return (
        <section className="container">

            <table className="rounded shadow" style={{width:"90%"}}>
                <tr>
                    <th>Service:</th>
                    <th>Customer Email:</th>
                    <th>Payment ID:</th>
                    <th>Status:</th>
                    <th>Action:</th>
                    
                </tr>
                {
                loadedData.length && loadedData.map(data => <ShowData data={data} handleUpdate={handleUpdate}></ShowData>)
                }
            </table>    
        </section>
    );
};

export default LoadAllOrders;