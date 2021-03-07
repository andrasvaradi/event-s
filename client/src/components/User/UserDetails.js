// import React, {useEffect} from 'react'
// import UsersApiService from '../../services/UsersApiService';
// import { Flex, Stack, Text,} from '@chakra-ui/react';

// export default function UserDetails () {

//   // let { id } = useParams();
//   // useEffect(() => {
//   //   UsersApiService.getHostDetails(event.owner)
//   //   .then(res => console.log(res))
//   //   .then(details => ownerDetails = details )
//   //   console.log(ownerDetails)
//   // }, [])

//   return (
//     <Flex minH={'100vh'} align={'center'} justify={'center'} bg={'gray.50'}>

//     <Stack spacing={8}>
//       <Text>Hello</Text>
//       <Text>{event.name}</Text>
//       <Text>{event.limit}</Text>
//       <Text>{event.location}</Text>
//       <Text>{event.type}</Text>
//       <Text>{event.description}</Text>
//       <Text>{event.duration}</Text>
//       <Text>{event.date}</Text>
//       <Text>Amount of people: {event.attendees}</Text>
//       <Text>{event.photo}</Text>
//       <Text>{event.owner}</Text>
//       <Stack spacing={4}>
//       </Stack>
//     </Stack>
//     }
//   </Flex>
//   );
// }