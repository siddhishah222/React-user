import React from 'react';

const UserInput=(props)=>{
    const inputstyle={
        border: '2px solid red'
    }
return <input 
type="text" 
style={inputstyle}
onChange={props.changed}
value={props.currentname}
/>

};
export default UserInput;


