import React from 'react';
import '../css/ProgressBar.css';
  
const ProgressBar = ({progress}) => {

    const wrapper = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: "green",
    }
        
    return (
    <div className="container">
      <div style={wrapper}>
        <span></span>
      </div>
    </div>
    )
}
  
export default ProgressBar;