import React from 'react'
import { Flex } from "@chakra-ui/react";
import './Spinner.css'

export default function Spin () {
  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg={'gray.600'}>
      <div className="loader">Loading...</div>
    </Flex>
  )
}