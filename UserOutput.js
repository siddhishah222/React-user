import React from 'react';
import './UserOutput.css';
const UserOutput=(props)=>{
    return(
        <div className="UserOutput">
            <p>UserName: {props.username}</p>
            <p> Some random text</p>
            <p> I hope I'll be overwritten!</p>
        </div>
    );
}
export default UserOutput;

