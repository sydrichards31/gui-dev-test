import React from 'react';

const Description = ({setDescription, setDescriptionComplete}) => {

    return (
        <div style={{display: "flex", alignItems: "center", paddingLeft: "10px"}}>
            <p style={{paddingRight: "10px", marginBottom: "0px", fontFamily: "Annie Use Your Telescope", fontSize: "18px"}}>Description</p>
            <input
                style={{height: "25px", fontFamily: "Annie Use Your Telescope", fontSize: "16px", border: "2px solid black", width: "200px", marginTop: "15px", paddingLeft: "5px"}}
                type='text'
                onChange={e => (setDescription(e.target.value), setDescriptionComplete(true))}
            />
        </div>   
    )    
};

export default Description;