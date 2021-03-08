/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import UsersApiService from '../../services/UsersApiService';
import { Link as RouterLink, Route } from 'react-router-dom';
import EventList from '../Event/EventList';
import {
  Flex,
  Box,
  Text,
  Button, Image, Heading, Wrap, AspectRatio, Stack, Spacer,Avatar
} from '@chakra-ui/react';
// import { motion } from "framer-motion"

export default function Profile({user, setUser}) {

  useEffect(() => {
    const getProfile = async () => {
      const userInfo = await UsersApiService.profile();
      if (userInfo) {
        setUser(userInfo)
      } else {
        console.log('No user info found 😞');
      }
    };
    getProfile();
  }, [setUser]);


  return (
    <Box h={'100%'} >
      <Stack minH={'100vh'}  p={20}
        bgImage="url('https://res.cloudinary.com/dujun1hoe/image/upload/v1615228154/event-s/gradient-background-26046-26731-hd-wallpapers.jpg_cenrqe.png')"  
        // bgSize="100% 50%"
        bgSize="100%"
        backgroundRepeat="no-repeat"
        justify={'center'}
        align={'center'}
        
      >
        <Flex borderRadius="md" bg={'custom.100'} flexDirection={'column'} maxW={'900px'} minH={'60%'} minW={'300px'} p={8}>
       {
        user.firstName ?
        <>

        <Flex w={'100%'} justify={'center'} p={4} spacing="0px" maxH={'300px'} >
          <Box >
            <Image alignSelf={'center'} boxShadow={'md'} borderRadius="md" src={user.photo} alt="" minW={'300px'} w={'40vw'}/>
          </Box>
          {/* <Spacer w={'30px'} /> */}
          <Flex w={'40vh'} align={'center'} justify={'center'} flexDirection={'column'}>
            <Heading align={'center'} >Welcome </Heading>
            <Heading align={'center'} > {user.firstName} {user.lastName}</Heading>
          </Flex>
        </Flex>
        <Flex m={5} align={'center'} justify={'center'} dir={'row'} justifyContent={'space-evenly'}>
          <Box align={'center'} >
            <Image src={'https://res.cloudinary.com/dujun1hoe/image/upload/v1615239488/event-s/account_ee8lc9.png'}/>
            <Text>User type:</Text>
            <Text fontSize="2xl" fontWeight="bold" >{user.host ? 'Host' : 'Guest'}</Text>
          </Box>
          <Box align={'center'} >
            <Image src={'https://res.cloudinary.com/dujun1hoe/image/upload/v1615239489/event-s/calendar_qsoxdg.png'}/>
            <Text>Number of events:</Text>
            <Text fontSize="2xl" fontWeight="bold" >{user.eventList.length ? user.eventList.length : 0}</Text>
          </Box>
        </Flex>
        {
          user.eventList.length ?
          <>
            <Text align={'center'} justify={'center'}>Current events:</Text>
            <Wrap justify={'center'} h={'100%'} p={4} marginTop={'5%'} w={'100%'} justifyContent={'space-around'}  borderRadius="md"  >
            {user.eventList.map(el =>
              <RouterLink to={`/events/${el._id}`} >
                <Box borderRadius="md"  h={'100%'}>
                  <Button m={4}>{el.name}</Button>
                </Box>
              </RouterLink>
            )}
            </Wrap>
          </>
          :
          <Text m={10} align={'center'} justify={'center'}>You haven't got any events yet. {user.host ? `It's the perfect time to create one!` : `Why don't you have a look around and sign up to some?`}</Text>
        }
        </>
        :
        <RouterLink to='/login'>
          <Button>You need to log in first</Button>
        </RouterLink>
      }
      </Flex>
    </Stack>
    </Box>
  )
}



//     <Stack direction={'row'} justify={'center'} spacing={6}>
//       <Stack spacing={0} align={'center'}>
//         <Text fontWeight={600}>23k</Text>
//         <Text fontSize={'sm'} color={'gray.500'}>
//           Followers
//         </Text>
//       </Stack>
//       <Stack spacing={0} align={'center'}>
//         <Text fontWeight={600}>23k</Text>
//         <Text fontSize={'sm'} color={'gray.500'}>
//           Followers
//         </Text>
//       </Stack>
//     </Stack>

//     <Button
//       w={'full'}
//       mt={8}
//       bg={useColorModeValue('#151f21', 'gray.900')}
//       color={'white'}
//       rounded={'md'}
//       _hover={{
//         transform: 'translateY(-2px)',
//         boxShadow: 'lg',
//       }}>
//       Follow
//     </Button>
//   </Box>
// </Box>
// </Center>
// );
// }






{/* <Box p={4}>
<SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
  <Feature
    icon={<Icon as={FcAssistant} w={10} h={10} />}
    title={'Lifetime Support'}
    text={
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
    }
  />
  <Feature
    icon={<Icon as={FcDonate} w={10} h={10} />}
    title={'Unlimited Donations'}
    text={
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
    }
  />
  <Feature
    icon={<Icon as={FcInTransit} w={10} h={10} />}
    title={'Instant Delivery'}
    text={
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
    }
  />
</SimpleGrid>
</Box> */}




// <Box minH={'100vh'} bg={'gray.100'} borderRadius="md" justify={'center'} p={'5%'} m={'5%'}>
//       {
//         user.firstName ?
//         <>
//         {/* <motion.div
//           animate={{ scale: 1.2 }}
//           transition={{ duration: 0.5 }}

//           > */}
//         <Wrap w={'100%'} justify={'center'} spacing="30px" justifyContent={'space-around'}>
//         <Box boxSize="sm" >
//           <Image alignSelf={'center'} boxShadow={'md'} borderRadius="md" src={user.photo} alt="" w={'40vw'}/>
//         </Box>
//           <Flex  w={'40vh'} alignItems={'center'} flexDirection={'column'}>
//             <Heading align={'center'} >Welcome {user.firstName} {user.lastName}</Heading>
//             <Text m={5}>User type: {user.host ? 'Host' : 'Guest'}</Text>
//             <Text>Number of events: {user.eventList.length ? user.eventList.length : 0}</Text>
//           </Flex>
//           </Wrap>
//         {/* </motion.div> */}
//         {
//           user.eventList.length ?
//           <>
//             <Text align={'center'} justify={'center'}>Current events:</Text>
//             <Wrap justify={'center'} h={'100%'} p={4} marginTop={'5%'} w={'100%'} justifyContent={'space-around'}  borderRadius="md" borderWidth={5} >
//             {user.eventList.map(el =>
//               <RouterLink to={`/events/${el._id}`} >
//                 <Box borderRadius="md" bg={'gray.300'} h={'100%'}>
//                   <AspectRatio maxW="400px" ratio={4 / 3}>
//                   <Image  borderRadius="md" src={el.photo} alt="naruto" objectFit="cover" />
//                 </AspectRatio>
//                   <Text m={4}>{el.name}</Text>
//                 </Box>
//               </RouterLink>
//             )}
//             </Wrap>
//           </>
//           :
//           <Text m={10} align={'center'} justify={'center'}>You haven't got any events yet. {user.host ? `It's the perfect time to create one!` : `Why don't you have a look around and sign up to some?`}</Text>
//         }
//         </>
//         :
//         <RouterLink to='/login'>
//           <Button>You need to log in first</Button>
//         </RouterLink>
//       }
//     </Box>