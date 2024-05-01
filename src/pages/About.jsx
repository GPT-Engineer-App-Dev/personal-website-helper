import { Box, Heading, Text } from '@chakra-ui/react';

const About = () => {
  return (
    <Box bg="purple.300" color="white" p={5} minH="100vh">
      <Heading as="h1" size="xl" mb={4}>About Us</Heading>
      <Text fontSize="lg">
        RetroWave is all about bringing back the vibrant and dynamic aesthetics of the 80s and 90s.
        Our mission is to provide a nostalgic experience through our designs and projects.
      </Text>
    </Box>
  );
};

export default About;