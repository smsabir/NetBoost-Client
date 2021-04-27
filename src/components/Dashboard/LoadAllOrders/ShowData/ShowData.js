import { faCheckSquare, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const ShowData = (props) => {
    const { prodName, email, paymentId, _id, status } = props.data;

    const [value, setValue] = useState('');

    const getValue = (event) => {
        let newValue = event.target.value;
        setValue(newValue)

        console.log(value);
    }
    return (

        <tr>
            <td>{prodName}</td>
            <td>{email}</td>
            <td>{paymentId}</td>
            <td><select className="text-capitalize" name="status" id="status" onChange={(event) => getValue(event)}>
                <option  selected="selected">{status}</option>
                <option value='pending'>Pending</option>
                <option value="processing">Processing</option>
                <option value="completed">Completed</option>
            </select></td>
            <td><button className="" style={{backgroundColor:"green", border: 'none', color: 'white'}} onClick={() => props.handleUpdate(_id, value)} ><FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon></button></td>
        </tr>

    );
};

export default ShowData;