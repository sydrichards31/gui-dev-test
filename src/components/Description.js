import React from 'react';

const Description = ({setDescription, setDescriptionComplete}) => {

    return (
        <div className="buttonContainer">
            <input
                type='text'
                onChange={e => (setDescription(e.target.value), setDescriptionComplete(true))}
            />
        </div>   
    )    
};

export default Description;