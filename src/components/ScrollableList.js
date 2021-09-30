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
          <Card style={{ height: "230px", width: "225px" }}>
          <SearchBar value={searched} onChange={ (searchVal) => { requestSearch(searchVal)}} onCancelSearch={() => cancelSearch()} style={{height: "35px"}} placeholder="Search for Tech Lead"/>
            <Box>            
              <Box
                bgcolor="white"
                style={{
                  overflowY: "auto",
                  height: "215px",
                  width: "215px",
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
                        fontSize="12px"
                        height="30px"
                      >
                        <p className="listItems" style={{cursor: "pointer"}} onClick={() => changeName(name)}>{name}</p>
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
