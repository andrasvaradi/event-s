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
      event.name.includes(searchTerm) || event.description.includes(searchTerm)
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
    <Box >
      {
        false ?
        (<Spinner />)
        : (
        <>
        <Wrap w={'100%'} bg={'gray.300'}>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <SortBar checkBoxes={checkBoxes} setCheckboxes={setCheckboxes} />
          <Button onClick={toggle}>Map</Button>
        </Wrap>
        <Box h={"10px"}></Box>
        <Flex justifyContent={"space-evenly"}>
          {
            displayMap ? <Map filteredEvents={filteredEvents}/>
            : null
          }
          {/* <Map filteredEvents={filteredEvents}/> */}
          <EventList value={filteredEvents} />
        </Flex>
        </>
        )
      }
    </Box>
  );
}
