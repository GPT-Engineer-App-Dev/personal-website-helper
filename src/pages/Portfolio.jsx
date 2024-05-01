import { Box, Heading, Text } from '@chakra-ui/react';

const Portfolio = () => {
  return (
    <Box bg="yellow.400" color="black" p={5} minH="100vh">
      <Heading as="h1" size="xl" mb={4}>Our Portfolio</Heading>
      <Text fontSize="lg">
        Check out our projects that showcase our expertise in retro-themed designs and solutions.
      </Text>
    </Box>
  );
};

export default Portfolio;