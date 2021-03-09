import React from 'react';
import { Box, Flex, Image , Stack, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import moment from 'moment';
import { motion, AnimatePresence } from 'framer-motion';


function EventCard ({value}) {

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
            // loop: Infinity,
            // repeatDelay: 1
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
              state: {event: value}}
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
                      // layout={'fill'}
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


// import Image from 'next/image';
// import {
//   Box,
//   Center,
//   Heading,
//   Text,
//   Stack,
//   Avatar,
//   useColorModeValue,
// } from '@chakra-ui/react';

// export default function blogPostWithImage() {
//   return (
//     <Center py={6}>
//       <Box
//         maxW={'445px'}
//         w={'full'}
//         bg={useColorModeValue('white', 'gray.900')}
//         boxShadow={'2xl'}
//         rounded={'md'}
//         p={6}
//         overflow={'hidden'}>
//         <Box
//           h={'210px'}
//           bg={'gray.100'}
//           mt={-6}
//           mx={-6}
//           mb={6}
//           pos={'relative'}>
//           <Image
//             src={
//               'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
//             }
//             layout={'fill'}
//           />
//         </Box>
//         <Stack>
//           <Text
//             color={'green.500'}
//             textTransform={'uppercase'}
//             fontWeight={800}
//             fontSize={'sm'}
//             letterSpacing={1.1}>
//             Blog
//           </Text>
//           <Heading
//             color={useColorModeValue('gray.700', 'white')}
//             fontSize={'2xl'}
//             fontFamily={'body'}>
//             Boost your conversion rate
//           </Heading>
//           <Text color={'gray.500'}>
//             Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
//             nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
//             erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
//             et ea rebum.
//           </Text>
//         </Stack>
//         <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
//           <Avatar
//             src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
//             alt={'Author'}
//           />
//           <Stack direction={'column'} spacing={0} fontSize={'sm'}>
//             <Text fontWeight={600}>Achim Rolle</Text>
//             <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
//           </Stack>
//         </Stack>
//       </Box>
//     </Center>
//   );
// }