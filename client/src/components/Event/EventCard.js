import React from 'react';
import { Box, Flex, Image, Stack, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import moment from 'moment';
import { motion } from 'framer-motion';


function EventCard({ value }) {

  return (
    <Box
      maxW={'40%'}
      h={'250px'}
      maxH={'50%'}
      w={'25%'}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      m={2}
      borderRadius="md"
      p={3}
      overflow={'hidden'}>
      <motion.div
        animate={{
          scale: [1, 0.8, 1],
          duration: 0.5
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 0],
        }}
        whileHover={{
          scale: 1.1,
          transition: {
            duration: .2
          }
        }}>
        <RouterLink to={
          {
            pathname: `/events/${value._id}`,
            state: { event: value }
          }
        }>
          <Flex flexDirection="column" justifyContent="center" alignItems="center">

            <Box
              h={'20%'}
              bg={'gray.100'}
              mt={-6}
              mx={-6}
              mb={2}
              pos={'relative'}
            >
              <Image
                borderRadius="md"
                src={value.photo}
              />
            </Box>
            <Stack>
              <Heading
                color={useColorModeValue('gray.700', 'white')}
                fontSize={'medium'}
                fontFamily={'body'}>
                {value.name}
              </Heading>
              <Text color={'gray.500'}>{value.location}</Text>
              <Text >{moment(value.date).format("MMM Do YY")}</Text>
            </Stack>
          </Flex>
        </RouterLink>
      </motion.div>
    </Box>
  )
}

export default EventCard;
