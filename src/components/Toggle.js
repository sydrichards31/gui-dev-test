import React from 'react';
import {Button} from 'react-bootstrap';
import '../css/Toggle.css';

const Toggle = ({shiftType, setShiftType}) => {

    function changeButton ()
    {
        shiftType === "Regular" ? setShiftType("Extra") : setShiftType("Regular");
    }

    return (
        <div className="buttonContainer">
            <Button className={shiftType === "Regular" ? "active" : "inactive"} onClick={changeButton}>Regular</Button>
            <Button className={shiftType === "Extra" ? "active" : "inactive"} onClick={changeButton}>Extra</Button>
        </div>   
    )    
};

export default Toggle;