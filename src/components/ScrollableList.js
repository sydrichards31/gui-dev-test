import React, { useState } from 'react';
import { Card, Box, Divider } from "@material-ui/core";
import SearchBar from 'material-ui-search-bar';


const ScrollableList = ({nameList, setTechLead, setLeadComplete}) => {

    const [listData, setListData] = useState(nameList);
    const [filteredData, setFiltered] = useState(listData);
    const [searched, setSearched] = useState("");

    

    const requestSearch = (searchedVal) => {
        console.log(searchedVal);
        //console.log(filteredData);
        const filter = listData.filter((name) => {
          return name.toLowerCase().includes(searchedVal.toLowerCase());
        });
        console.log(filter);
      setFiltered(filter);
      console.log(filteredData);
    };
    
    const cancelSearch = () => {
      setSearched("");
      requestSearch(searched);
    };

    function changeName(data) {
      setLeadComplete(true);
      setTechLead(data);
    }

    return (
        <div className="App">
          <div style={{width: "275px"}}>
            <SearchBar value={searched} className="search" onChange={ (searchVal) => { requestSearch(searchVal)}} onCancelSearch={() => cancelSearch()} style={{height: "35px"}} placeholder="Search for Tech Lead"/>
          </div>
          <p><br></br></p>
          <Card style={{ height: "296px", width: "275px", borderRadius: "0px"}}>
            <Box
              style={{
                border: "2px solid black",
                padding: "1px"
              }}
            >            
              <Box
                bgcolor="white"
                style={{
                  overflowY: "auto",
                  height: "270px",
                  width: "250px",
                  display: "flex",
                  flexGrow: 1,
                  flexDirection: "column",
                  margin: "10px",
                }}
              >
                {filteredData?.map((name) => {
                  return (
                    <>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        marginLeft="10px"
                        fontSize="15px"
                        height="45px"
                        
                      >
                        <p className="listItems" style={{cursor: "pointer", fontSize: "18px", fontFamily: "Annie Use Your Telescope"}} onClick={() => changeName(name)}>{name}</p>
                      </Box>
                      <Divider />
                    </>
                  );
                })}
              </Box>
            </Box>
          </Card>
        </div>
      );
};

export default ScrollableList;
