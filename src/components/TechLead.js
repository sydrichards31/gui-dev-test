import React from 'react';

const TechLead = ({techLead}) => {

    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <p style={{marginBottom: "3px", fontFamily: "Annie Use Your Telescope", fontSize: "18px"}}>Tech Lead</p>
            <div style={{border: "2px solid black", paddingTop: "8px", width: "170px", height: "26px"}}>
              <p style={{textAlign: "center", margin: "0px", fontFamily: "Annie Use Your Telescope"}}>{techLead}</p>
            </div>
      </div>
  
    )    
};

export default TechLead;