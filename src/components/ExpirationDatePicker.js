import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import { BsCalendar } from 'react-icons/bs';
import 'react-datepicker/dist/react-datepicker.css';
import '../css/DatePicker.css'


const ExpirationDatePicker = ({expirationDate, setExpirationDate, setExpirationComplete}) => {

    const handleDateSelect = (date) => {
        setExpirationComplete(true);
        setExpirationDate(date);
    }
    
    return (
        <div className="input-container">
            <p style={{marginBottom: "3px", fontFamily: "Annie Use Your Telescope", fontSize: "18px"}}>Expiration Date</p>
            <div style={{border: "2px solid black", paddingLeft: "10px", paddingRight: "12px"}}>
              <label style={{display: "flex", alignItems: "center"}}>
              <DatePicker            
                  placeholderText="Select Date"
                  selected={expirationDate}                 
                  minDate={new Date()}
                  onChange={handleDateSelect}
                  disabledKeyboardNavigation
                  dateFormat="d MMMM yyyy"/>   
              <BsCalendar/>
              </label>
              </div>
      </div>

    )    
};

export default ExpirationDatePicker;