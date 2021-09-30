import './css/App.css';
import React, { useState } from 'react';
import Toggle from './components/Toggle';
import Description from './components/Description';
import ScrollableList from './components/ScrollableList';
import TechLead from './components/TechLead';
import ExpirationDatePicker from './components/ExpirationDatePicker';
import WeeklySchedule from './components/WeeklySchedule';
import ProgressBar from './components/ProgressBar';
import dateFormat from 'dateformat';
// import { writeJsonFile } from 'write-json-file';


function App() {
  
  const editJsonFile = require("edit-json-file");
  let file = editJsonFile(`${__dirname}/output.json`);
  // var fs = require('browserify-fs');

  const [shiftType, setShiftType] = useState("Regular");
  const [description, setDescription] = useState("");
  const [techLead, setTechLead] = useState("");
  const [expirationDate, setExpirationDate] = useState(null);
  const [shiftDetails, setShiftDetails] = useState([]);
  
  const [scheduleComplete, setScheduleComplete] = useState(false);
  const [descriptionComplete, setDescriptionComplete] = useState(false);
  const [techLeadComplete, setLeadComplete] = useState(false);
  const [expirationComplete, setExpirationComplete] = useState(false);

  const [addedDays, setAddedDays] = useState({
    mon: false,
    tue: false,
    wed: false,
    thur: false,
    fri: false,
    sat: false,
    sun: false
  });
  const [week, setWeek] = useState({
      mondayStart: "12",
      mondayEnd: "12",
      tuesdayStart: "12",
      tuesdayEnd: "12",
      wednesdayStart: "12",
      wednesdayEnd: "12",
      thursdayStart: "12",
      thursdayEnd: "12",
      fridayStart: "12",
      fridayEnd: "12",
      saturdayStart: "12",
      saturdayEnd: "12",
      sundayStart: "12",
      sundayEnd: "12",
  });

  const nameList = ["Jeremy Renner", "Chris Hemsworth", "Scarlett Johansson", "Robert Downey Jr.", "Chris Evans", 
    "Mark Ruffalo", "Jennifer Aniston", "Al Pacino", "Tom Hanks", "Kate Hudson", "Robin Williams", "Merryl Streep", 
    "Julie Andrews", "Selena Gomez", "Theo James", "Liam Hemsworth", "Timothy Chalamet", "Adam Sandler", "Emma Stone"];


  function printValues(){
    console.log('hi')
  }

  function submit() {
    var day = "";
    file.set("ShiftType", shiftType);
    file.set("Tech Lead", techLead);
    file.set("Expiration Date", dateFormat(expirationDate, "mm/dd/yyyy"));

    if (addedDays.mon){
      file.append("ShiftDetails", {Day:"Monday", FromTime: week.mondayStart + ":00", EndTime: week.mondayEnd + ":00"});
    }
    if (addedDays.tue){
      file.append("ShiftDetails", {Day:"Tuesday", FromTime: week.tuesdayStart + ":00", EndTime: week.tuesdayEnd + ":00"});
    }
    if (addedDays.wed){
      file.append("ShiftDetails", {Day:"Wednesday", FromTime: week.wednesdayStart + ":00", EndTime: week.wednesdayEnd + ":00"});
    }
    if (addedDays.thur){
      file.append("ShiftDetails", {Day:"Thursday", FromTime: week.thursdayStart + ":00", EndTime: week.thursdayEnd + ":00"});
    }
    if (addedDays.fri){
      file.append("ShiftDetails", {Day:"Friday", FromTime: week.fridayStart + ":00", EndTime: week.fridayEnd + ":00"});
    }
    if (addedDays.sat){
      file.append("ShiftDetails", {Day:"Saturday", FromTime: week.saturdayStart + ":00", EndTime: week.saturdayEnd + ":00"});
    }
    if (addedDays.sun){
      file.append("ShiftDetails", {Day:"Sunday", FromTime: week.sundayStart + ":00", EndTime: week.sundayEnd + ":00"});
    }

    console.log(file.get());
    
    // handleSaveToPC(file.get(), "output")

  }

  var progress = 0;
  var submitDisabled = true;

  if (expirationComplete)
    progress = progress + 25;
  if (descriptionComplete)
    progress = progress + 25;
  if (scheduleComplete)
    progress = progress + 25;
  if (techLeadComplete)
    progress = progress + 25;
  
  if (progress === 100) {
    submitDisabled = false;
  }

  return (
    <div>
      <Toggle shiftType={shiftType} setShiftType={setShiftType}/>
      <Description setDescription={setDescription} setDescriptionComplete={setDescriptionComplete} />
      <ExpirationDatePicker expirationDate={expirationDate} setExpirationDate={setExpirationDate} setExpirationComplete={setExpirationComplete} />
      <ScrollableList nameList={nameList} setTechLead={setTechLead} setLeadComplete={setLeadComplete}/>
      <ProgressBar progress={progress} />
      <TechLead techLead={techLead} />
      <WeeklySchedule week={week} setWeek={setWeek} addedDays={addedDays} setAddedDays={setAddedDays} scheduleComplete={scheduleComplete} setScheduleComplete={setScheduleComplete} />
      <button disabled={submitDisabled} className="submitBtn" onClick={submit}>Submit</button>
      <button onClick={printValues}>Print Values</button>
    </div>
  );
}

export default App;
