import React, { useState, useEffect } from "react";
import EventList from "../../components/Event/EventList";
import SearchBar from "../SearchBar";
import SortBar from "../SortBar";
import Map from "../map/Map";
import { Box, Flex, Text, Wrap, Button } from "@chakra-ui/react";
import Spinner from '../../components/Handling/Spinner';

export default function Events({ value }) {
  const [filteredEvents, setFilteredEvents] = useState([...value]);
  const [searchTerm, setSearchTerm] = useState('')
  const [checkBoxes, setCheckboxes] = useState([])


  function search () {
    if (!searchTerm && checkBoxes.length) return check()
    const events = checkBoxes.length ? filteredEvents : value
    const search = events.filter(event =>
      event.name.toLowerCase().includes(searchTerm) || event.description.toLowerCase().includes(searchTerm)
    );
    setFilteredEvents(search);
  }
  function check () {
    if(!checkBoxes.length && !searchTerm) return setFilteredEvents(value)
    if(!checkBoxes.length && searchTerm) {
      search()
    } else {
      const events = searchTerm ? filteredEvents : value
      const checkboxes = events.filter(event =>
        checkBoxes.includes(event.type)
      );
      setFilteredEvents(checkboxes);
      console.log(checkBoxes)
    }
  }
  useEffect(() => {
    if(!checkBoxes.length && !searchTerm) return setFilteredEvents(value)
    if(checkBoxes.length && !searchTerm) {
      check()
    }
    // if(!checkBoxes.length && searchTerm) search()
    search()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm])
  useEffect(() => {
    check()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkBoxes])


  function getGeoLocation (events) {
    const list = {
      postcodes: []
    }
    events.forEach(event => {
      list.postcodes.push(event.location)
    });
  }
  const [displayMap, setDisplayMap] = useState(false)
  const toggle = () => {
    if (!displayMap) setDisplayMap(true)
    else setDisplayMap(false)
  }

  return (
    <Box bg={'gray.100'} h={'100vh'} >
      {
        false ?
        (<Spinner />)
        : (
        <>
        <Wrap w={'100%'} bg={'gray.300'} p={4} boxShadow={'md'} >
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Button marginRight={4} onClick={toggle}>Map</Button>
          <SortBar checkBoxes={checkBoxes} setCheckboxes={setCheckboxes} />
        </Wrap>
        <Box h={"10px"}></Box>
        <Wrap m={5}>
          {
            displayMap ? <Map filteredEvents={filteredEvents}/>
            : null
          }

            <EventList value={filteredEvents} />
          <Flex justifyContent={"space-evenly"}>
            {/* <Map filteredEvents={filteredEvents}/> */}
          </Flex>
        </Wrap>
        </>
        )
      }
    </Box>
  );
}
