import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../css/DatePicker.css'


const ExpirationDatePicker = ({expirationDate, setExpirationDate, setExpirationComplete}) => {

    const handleDateSelect = (date) => {
        setExpirationComplete(true);
        setExpirationDate(date);
    }

    return (
        <div className="input-container">
        <div>
          <label className="expLabel">Expiration Date</label>
            <DatePicker
                placeholderText="Select Date"
                selected={expirationDate}
                minDate={new Date()}
                onChange={handleDateSelect}
                disabledKeyboardNavigation
                dateFormat="d MMMM yyyy"/>            
        </div>
      </div>

    )    
};

export default ExpirationDatePicker;