import React from 'react';
import { Box, Flex, Image , Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function EventCard ({value}) {
  return (
      <Box bg="gray.200" w="40%" h="40%" p={4} m={4}  borderRadius="md" key={value._id}>
          <RouterLink to={`/events/${value._id}`}>
          <Flex flexDirection="column" justifyContent="center" alignItems="center">
            <Image borderRadius="md" src={value.photo} alt="" />
            <Text size="2xl">{value.name}</Text>
            <Text>{value.limit}</Text>
            <Text>{value.location}</Text>
            <Text>{value.time}</Text>
          </Flex>
        </RouterLink>
      </Box>
  )
}

export default EventCard;