import React from 'react';
import '../css/ProgressBar.css';
  
const ProgressBar = ({progress}) => {
    
    // var progress = 0;

    // if (expirationComplete)
    //   progress = progress + 25;
    // if (descriptionComplete)
    //   progress = progress + 25;
    // if (scheduleComplete)
    //   progress = progress + 25;
    // if (techLeadComplete)
    //   progress = progress + 25;


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