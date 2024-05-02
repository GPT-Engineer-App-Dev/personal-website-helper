import { Box, Flex, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { FaHome, FaInfo, FaBriefcase, FaEnvelope } from 'react-icons/fa';

const App = () => {
  return (
    <Box bg="orange.300" minH="100vh" p={5}>
      <Flex direction="column" align="center" justify="center">
        <Heading as="h1" size="4xl" color="pink.400" mb={4} textShadow="2px 2px #000000">Welcome to RetroWave</Heading>
        <Text fontSize="xl" color="white" mb={6}>Dive into the nostalgia of retro design and vibrant colors!</Text>
        <VStack spacing={10} align="stretch">
          <Box bg="purple.300" color="white" p={5}>
            <Heading as="h2" size="xl" mb={4}>About Us</Heading>
            <Text fontSize="lg">
              Fabian is a passionate developer with a keen interest in retro-themed designs. At RetroWave, Fabian combines his professional skills with his love for the vibrant and dynamic aesthetics of the 80s and 90s to create unique and nostalgic experiences.
            </Text>
          </Box>
          <Box bg="yellow.400" color="black" p={5}>
            <Heading as="h2" size="xl" mb={4}>Our Portfolio</Heading>
            <Text fontSize="lg">
              Check out our projects that showcase our expertise in retro-themed designs and solutions.
            </Text>
          </Box>
          <Box bg="teal.300" color="white" p={5}>
            <Heading as="h2" size="xl" mb={4}>Contact Us</Heading>
            <Text fontSize="lg">
              Have any questions or want to get in touch? Feel free to contact us through our social media channels or email.
            </Text>
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
};

export default App;