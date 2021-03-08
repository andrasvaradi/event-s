import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';


export default function SmallWithSocial() {
  return (
    <Box
    bg={'custom.100'}
    justify={'center'}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={'center'}
        align={{ base: 'center', md: 'center' }}>
        <Text >Andras</Text>
        <Stack direction={'row'} spacing={6}>
        </Stack>
      </Container>
    </Box>
  );
}