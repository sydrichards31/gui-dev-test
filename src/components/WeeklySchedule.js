import React from 'react';
import { BsCaretUpFill, BsCaretDownFill } from 'react-icons/bs';
import '../css/WeeklySchedule.css';

const WeeklySchedule = ({week, setWeek, addedDays, setAddedDays, scheduleComplete, setScheduleComplete}) => {

    function arrowClicked(day, direction, se) {
        
        if (!scheduleComplete)
            setScheduleComplete(true);

        var hour = 0;
        switch(day) {
            case 'monday':
                if (!addedDays.mon){
                    addedDays.mon = true;
                    setAddedDays({...addedDays});
                }
                if (se === "start"){
                    if (direction === "up") {
                        if (week.mondayStart === "12"){
                            hour = 1;
                            week.mondayStart = hour.toString(); 
                        } else {
                            hour = parseInt(week.mondayStart) + 1;
                            week.mondayStart = hour.toString();
                        }
                    } else {
                        if (week.mondayStart === "1"){
                            hour = 12;
                            week.mondayStart = hour.toString(); 
                        } else {
                            hour = parseInt(week.mondayStart) - 1;
                            week.mondayStart = hour.toString();
                        }
                    }
                } else {
                    if (direction === "up") {
                        if (week.mondayEnd === "12"){
                            hour = 1;
                            week.mondayEnd = hour.toString(); 
                        } else {
                            hour = parseInt(week.mondayEnd) + 1;
                            week.mondayEnd = hour.toString();
                        }
                    } else {
                        if (week.mondayEnd === "1"){
                            hour = 12;
                            week.mondayEnd = hour.toString(); 
                        } else {
                            hour = parseInt(week.mondayEnd) - 1;
                            week.mondayEnd = hour.toString();
                        }
                    }
                }
                setWeek ({...week});
                break;          
                
            case 'tuesday':
                if (!addedDays.tue){
                    addedDays.tue = true;
                    setAddedDays({...addedDays});
                }
                if (se === "start"){
                    if (direction === "up") {
                        if (week.tuesdayStart === "12"){
                            hour = 1;
                            week.tuesdayStart = hour.toString(); 
                        } else {
                            hour = parseInt(week.tuesdayStart) + 1;
                            week.tuesdayStart = hour.toString();
                        }
                    } else {
                        if (week.tuesdayStart === "1"){
                            hour = 12;
                            week.tuesdayStart = hour.toString(); 
                        } else {
                            hour = parseInt(week.tuesdayStart) - 1;
                            week.tuesdayStart = hour.toString();
                        }
                    }
                } else {
                    if (direction === "up") {
                        if (week.tuesdayEnd === "12"){
                            hour = 1;
                            week.tuesdayEnd = hour.toString(); 
                        } else {
                            hour = parseInt(week.tuesdayEnd) + 1;
                            week.tuesdayEnd = hour.toString();
                        }
                    } else {
                        if (week.tuesdayEnd === "1"){
                            hour = 12;
                            week.tuesdayEnd = hour.toString(); 
                        } else {
                            hour = parseInt(week.tuesdayEnd) - 1;
                            week.tuesdayEnd = hour.toString();
                        }
                    }
                }
                setWeek ({...week});
                break; 

            case 'wednesday':
                if (!addedDays.wed){
                    addedDays.wed = true;
                    setAddedDays({...addedDays});
                }
                if (se === "start"){
                    if (direction === "up") {
                        if (week.wednesdayStart === "12"){
                            hour = 1;
                            week.wednesdayStart = hour.toString(); 
                        } else {
                            hour = parseInt(week.wednesdayStart) + 1;
                            week.wednesdayStart = hour.toString();
                        }
                    } else {
                        if (week.wednesdayStart === "1"){
                            hour = 12;
                            week.wednesdayStart = hour.toString(); 
                        } else {
                            hour = parseInt(week.wednesdayStart) - 1;
                            week.wednesdayStart = hour.toString();
                        }
                    }
                } else {
                    if (direction === "up") {
                        if (week.wednesdayEnd === "12"){
                            hour = 1;
                            week.wednesdayEnd = hour.toString(); 
                        } else {
                            hour = parseInt(week.wednesdayEnd) + 1;
                            week.wednesdayEnd = hour.toString();
                        }
                    } else {
                        if (week.wednesdayEnd === "1"){
                            hour = 12;
                            week.wednesdayEnd = hour.toString(); 
                        } else {
                            hour = parseInt(week.wednesdayEnd) - 1;
                            week.wednesdayEnd = hour.toString();
                        }
                    }
                }
                setWeek ({...week});
                break; 

            case 'thursday':
                if (!addedDays.thur){
                    addedDays.thur = true;
                    setAddedDays({...addedDays});
                }
                if (se === "start"){
                    if (direction === "up") {
                        if (week.thursdayStart === "12"){
                            hour = 1;
                            week.thursdayStart = hour.toString(); 
                        } else {
                            hour = parseInt(week.thursdayStart) + 1;
                            week.thursdayStart = hour.toString();
                        }
                    } else {
                        if (week.thursdayStart === "1"){
                            hour = 12;
                            week.thursdayStart = hour.toString(); 
                        } else {
                            hour = parseInt(week.thursdayStart) - 1;
                            week.thursdayStart = hour.toString();
                        }
                    }
                } else {
                    if (direction === "up") {
                        if (week.thursdayEnd === "12"){
                            hour = 1;
                            week.thursdayEnd = hour.toString(); 
                        } else {
                            hour = parseInt(week.thursdayEnd) + 1;
                            week.thursdayEnd = hour.toString();
                        }
                    } else {
                        if (week.thursdayEnd === "1"){
                            hour = 12;
                            week.thursdayEnd = hour.toString(); 
                        } else {
                            hour = parseInt(week.thursdayEnd) - 1;
                            week.thursdayEnd = hour.toString();
                        }
                    }
                }
                setWeek ({...week});
                break; 
                
            case 'friday':
                if (!addedDays.fri){
                    addedDays.fri = true;
                    setAddedDays({...addedDays});
                }
                if (se === "start"){
                    if (direction === "up") {
                        if (week.fridayStart === "12"){
                            hour = 1;
                            week.fridayStart = hour.toString(); 
                        } else {
                            hour = parseInt(week.fridayStart) + 1;
                            week.fridayStart = hour.toString();
                        }
                    } else {
                        if (week.fridayStart === "1"){
                            hour = 12;
                            week.fridayStart = hour.toString(); 
                        } else {
                            hour = parseInt(week.fridayStart) - 1;
                            week.fridayStart = hour.toString();
                        }
                    }
                } else {
                    if (direction === "up") {
                        if (week.fridayEnd === "12"){
                            hour = 1;
                            week.fridayEnd = hour.toString(); 
                        } else {
                            hour = parseInt(week.fridayEnd) + 1;
                            week.fridayEnd = hour.toString();
                        }
                    } else {
                        if (week.fridayEnd === "1"){
                            hour = 12;
                            week.fridayEnd = hour.toString(); 
                        } else {
                            hour = parseInt(week.fridayEnd) - 1;
                            week.fridayEnd = hour.toString();
                        }
                    }
                }
                setWeek ({...week});
                break; 
            
            case 'saturday':
                if (!addedDays.sat){
                    addedDays.sat = true;
                    setAddedDays({...addedDays});
                }
                if (se === "start"){
                    if (direction === "up") {
                        if (week.saturdayStart === "12"){
                            hour = 1;
                            week.saturdayStart = hour.toString(); 
                        } else {
                            hour = parseInt(week.saturdayStart) + 1;
                            week.saturdayStart = hour.toString();
                        }
                    } else {
                        if (week.saturdayStart === "1"){
                            hour = 12;
                            week.saturdayStart = hour.toString(); 
                        } else {
                            hour = parseInt(week.saturdayStart) - 1;
                            week.saturdayStart = hour.toString();
                        }
                    }
                } else {
                    if (direction === "up") {
                        if (week.saturdayEnd === "12"){
                            hour = 1;
                            week.saturdayEnd = hour.toString(); 
                        } else {
                            hour = parseInt(week.saturdayEnd) + 1;
                            week.saturdayEnd = hour.toString();
                        }
                    } else {
                        if (week.saturdayEnd === "1"){
                            hour = 12;
                            week.saturdayEnd = hour.toString(); 
                        } else {
                            hour = parseInt(week.saturdayEnd) - 1;
                            week.saturdayEnd = hour.toString();
                        }
                    }
                }
                setWeek ({...week});
                break; 
            
            case 'sunday':
                if (!addedDays.sun){
                    addedDays.sun = true;
                    setAddedDays({...addedDays});
                }
                if (se === "start"){
                    if (direction === "up") {
                        if (week.sundayStart === "12"){
                            hour = 1;
                            week.sundayStart = hour.toString(); 
                        } else {
                            hour = parseInt(week.sundayStart) + 1;
                            week.sundayStart = hour.toString();
                        }
                    } else {
                        if (week.sundayStart === "1"){
                            hour = 12;
                            week.sundayStart = hour.toString(); 
                        } else {
                            hour = parseInt(week.sundayStart) - 1;
                            week.sundayStart = hour.toString();
                        }
                    }
                } else {
                    if (direction === "up") {
                        if (week.sundayEnd === "12"){
                            hour = 1;
                            week.sundayEnd = hour.toString(); 
                        } else {
                            hour = parseInt(week.sundayEnd) + 1;
                            week.sundayEnd = hour.toString();
                        }
                    } else {
                        if (week.sundayEnd === "1"){
                            hour = 12;
                            week.sundayEnd = hour.toString(); 
                        } else {
                            hour = parseInt(week.sundayEnd) - 1;
                            week.sundayEnd = hour.toString();
                        }
                    }
                }
                setWeek ({...week});
                break; 
            
            default:
                break;
        }
    }
    
    return (
      <div className="table-wrapper">
          <div className="fromTo">
            <label className="headLabel" style={{paddingRight: "40px"}}>FROM</label>
            <label className="headLabel">TO</label>
          </div>
        <table id='schedule'>
            <tbody>
                <tr style={{margin: "0px", borderCollapse: "collapse", borderStyle: "none"}}>
                    <td style={{fontSize: "18px", width: "125px", fontFamily: "Annie Use Your Telescope"}}>Monday</td>
                    <td style={{margin: "0px"}}>
                        <table className="selector" style={{border: "2px solid black", borderSpacing: "0px", borderCollapse: "collapse"}}>
                            <tbody>
                                <tr>
                                    <td className={week.mondayStart.length > 1 ? "double" : "single"}>{week.mondayStart}</td>
                                    <td>
                                        <tr>
                                            <td className="arrowRow"><BsCaretUpFill className="upIcon" onClick={() => arrowClicked("monday", "up", "start")}/></td>
                                        </tr>
                                        <tr>
                                            <td className="arrowRow"><BsCaretDownFill className="downIcon" onClick={() => arrowClicked("monday", "down", "start")}/></td>
                                        </tr>
                                    </td>
                                    <td className={week.mondayEnd.length > 1 ? "double" : "single"}>{week.mondayEnd}</td>
                                    <td>
                                        <tr>
                                            <td className="arrowRow"><BsCaretUpFill className="upIcon" onClick={() => arrowClicked("monday", "up", "end")}/></td>
                                        </tr>
                                        <tr>
                                            <td className="arrowRow"><BsCaretDownFill className="downIcon" onClick={() => arrowClicked("monday", "down", "end")}/></td>
                                        </tr>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td style={{fontSize: "18px", width: "125px", fontFamily: "Annie Use Your Telescope"}}>Tuesday</td>
                    <td>
                        <table className="selector"  style={{border: "2px solid black", borderSpacing: "0px", borderCollapse: "collapse"}}>
                            <tbody>
                                <tr>
                                    <td className={week.tuesdayStart.length > 1 ? "double" : "single"}>{week.tuesdayStart}</td>
                                    <td>
                                        <tr>
                                            <td className="arrowRow"><BsCaretUpFill className="upIcon" onClick={() => arrowClicked("tuesday", "up", "start")}/></td>
                                        </tr>
                                        <tr>
                                            <td className="arrowRow"><BsCaretDownFill className="downIcon" onClick={() => arrowClicked("tuesday", "down", "start")}/></td>
                                        </tr>
                                    </td>
                                    <td className={week.tuesdayEnd.length > 1 ? "double" : "single"}>{week.tuesdayEnd}</td>
                                    <td>
                                        <tr>
                                            <td className="arrowRow"><BsCaretUpFill className="upIcon" onClick={() => arrowClicked("tuesday", "up", "end")}/></td>
                                        </tr>
                                        <tr>
                                            <td className="arrowRow"><BsCaretDownFill className="downIcon" onClick={() => arrowClicked("tuesday", "down", "end")}/></td>
                                        </tr>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td style={{fontSize: "18px", width: "125px", fontFamily: "Annie Use Your Telescope"}}>Wednesday</td>
                    <td>
                        <table className="selector"  style={{border: "2px solid black", borderSpacing: "0px", borderCollapse: "collapse"}}>
                            <tbody>
                                <tr>
                                    <td className={week.wednesdayStart.length > 1 ? "double" : "single"}>{week.wednesdayStart}</td>
                                    <td>
                                        <tr>
                                            <td className="arrowRow"><BsCaretUpFill className="upIcon" onClick={() => arrowClicked("wednesday", "up", "start")}/></td>
                                        </tr>
                                        <tr>
                                            <td className="arrowRow"><BsCaretDownFill className="downIcon" onClick={() => arrowClicked("wednesday", "down", "start")}/></td>
                                        </tr>
                                    </td>
                                    <td className={week.wednesdayEnd.length > 1 ? "double" : "single"}>{week.wednesdayEnd}</td>
                                    <td>
                                        <tr>
                                            <td className="arrowRow"><BsCaretUpFill className="upIcon" onClick={() => arrowClicked("wednesday", "up", "end")}/></td>
                                        </tr>
                                        <tr>
                                            <td className="arrowRow"><BsCaretDownFill className="downIcon" onClick={() => arrowClicked("wednesday", "down", "end")}/></td>
                                        </tr>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td style={{fontSize: "18px", width: "125px", fontFamily: "Annie Use Your Telescope"}}>Thursday</td>
                    <td>
                        <table className="selector"  style={{border: "2px solid black", borderSpacing: "0px", borderCollapse: "collapse"}}>
                            <tbody>
                                <tr>
                                    <td className={week.thursdayStart.length > 1 ? "double" : "single"}>{week.thursdayStart}</td>
                                    <td>
                                        <tr>
                                            <td className="arrowRow"><BsCaretUpFill className="upIcon" onClick={() => arrowClicked("thursday", "up", "start")}/></td>
                                        </tr>
                                        <tr>
                                            <td className="arrowRow"><BsCaretDownFill className="downIcon" onClick={() => arrowClicked("thursday", "down", "start")}/></td>
                                        </tr>
                                    </td>
                                    <td className={week.thursdayEnd.length > 1 ? "double" : "single"}>{week.thursdayEnd}</td>
                                    <td>
                                        <tr>
                                            <td className="arrowRow"><BsCaretUpFill className="upIcon" onClick={() => arrowClicked("thursday", "up", "end")}/></td>
                                        </tr>
                                        <tr>
                                            <td className="arrowRow"><BsCaretDownFill className="downIcon" onClick={() => arrowClicked("thursday", "down", "end")}/></td>
                                        </tr>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td style={{fontSize: "18px", width: "125px", fontFamily: "Annie Use Your Telescope"}}>Friday</td>
                    <td>
                        <table className="selector"  style={{border: "2px solid black", borderSpacing: "0px", borderCollapse: "collapse"}}>
                            <tbody>
                                <tr>
                                    <td className={week.fridayStart.length > 1 ? "double" : "single"}>{week.fridayStart}</td>
                                    <td>
                                        <tr>
                                            <td className="arrowRow"><BsCaretUpFill className="upIcon" onClick={() => arrowClicked("friday", "up", "start")}/></td>
                                        </tr>
                                        <tr>
                                            <td className="arrowRow"><BsCaretDownFill className="downIcon" onClick={() => arrowClicked("friday", "down", "start")}/></td>
                                        </tr>
                                    </td>
                                    <td className={week.fridayEnd.length > 1 ? "double" : "single"}>{week.fridayEnd}</td>
                                    <td>
                                        <tr>
                                            <td className="arrowRow"><BsCaretUpFill className="upIcon" onClick={() => arrowClicked("friday", "up", "end")}/></td>
                                        </tr>
                                        <tr>
                                            <td className="arrowRow"><BsCaretDownFill className="downIcon" onClick={() => arrowClicked("friday", "down", "end")}/></td>
                                        </tr>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td style={{fontSize: "18px", width: "125px", fontFamily: "Annie Use Your Telescope"}}>Saturday</td>
                    <td>
                        <table className="selector"  style={{border: "2px solid black", borderSpacing: "0px", borderCollapse: "collapse"}}>
                            <tbody>
                                <tr>
                                    <td className={week.saturdayStart.length > 1 ? "double" : "single"}>{week.saturdayStart}</td>
                                    <td>
                                        <tr>
                                            <td className="arrowRow"><BsCaretUpFill className="upIcon" onClick={() => arrowClicked("saturday", "up", "start")}/></td>
                                        </tr>
                                        <tr>
                                            <td className="arrowRow"><BsCaretDownFill className="downIcon" onClick={() => arrowClicked("saturday", "down", "start")}/></td>
                                        </tr>
                                    </td>
                                    <td className={week.saturdayEnd.length > 1 ? "double" : "single"}>{week.saturdayEnd}</td>
                                    <td>
                                        <tr>
                                            <td className="arrowRow"><BsCaretUpFill className="upIcon" onClick={() => arrowClicked("saturday", "up", "end")}/></td>
                                        </tr>
                                        <tr>
                                            <td className="arrowRow"><BsCaretDownFill className="downIcon" onClick={() => arrowClicked("saturday", "down", "end")}/></td>
                                        </tr>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td style={{fontSize: "18px", width: "125px", fontFamily: "Annie Use Your Telescope"}}>Sunday</td>
                    <td>
                        <table className="selector"  style={{border: "2px solid black", borderSpacing: "0px", borderCollapse: "collapse"}}>
                            <tbody>
                                <tr>
                                    <td className={week.sundayStart.length > 1 ? "double" : "single"}>{week.sundayStart}</td>
                                    <td>
                                        <tr>
                                            <td className="arrowRow"><BsCaretUpFill className="upIcon" onClick={() => arrowClicked("sunday", "up", "start")}/></td>
                                        </tr>
                                        <tr>
                                            <td className="arrowRow"><BsCaretDownFill className="downIcon" onClick={() => arrowClicked("sunday", "down", "start")}/></td>
                                        </tr>
                                    </td>
                                    <td className={week.sundayEnd.length > 1 ? "double" : "single"}>{week.sundayEnd}</td>
                                    <td>
                                        <tr>
                                            <td className="arrowRow"><BsCaretUpFill className="upIcon" onClick={() => arrowClicked("sunday", "up", "end")}/></td>
                                        </tr>
                                        <tr>
                                            <td className="arrowRow"><BsCaretDownFill className="downIcon" onClick={() => arrowClicked("sunday", "down", "end")}/></td>
                                        </tr>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table> 
      </div>
    )    
};

export default WeeklySchedule;