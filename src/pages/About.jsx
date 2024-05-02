import { Box, Heading, Text } from '@chakra-ui/react';

const About = () => {
  return (
    <Box bg="purple.300" color="white" p={5} minH="100vh">
      <Heading as="h1" size="xl" mb={4}>About Us</Heading>
      <Text fontSize="lg">
        Fabian is a passionate developer with a keen interest in retro-themed designs. At RetroWave, Fabian combines his professional skills with his love for the vibrant and dynamic aesthetics of the 80s and 90s to create unique and nostalgic experiences.
      </Text>
    </Box>
  );
};

export default About;