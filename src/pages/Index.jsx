import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';
import { FaHome, FaInfo, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Box bg="orange.300" minH="100vh" p={5}>
      <Flex direction="column" align="center" justify="center">
        <Heading as="h1" size="2xl" color="yellow.400" mb={4}>Welcome to RetroWave</Heading>
        <Text fontSize="xl" color="white" mb={6}>Dive into the nostalgia of retro design and vibrant colors!</Text>
        <Flex>
          <Link to="/about">
            <Button leftIcon={<FaInfo />} colorScheme="pink" variant="solid" m={2}>
              About
            </Button>
          </Link>
          <Link to="/portfolio">
            <Button leftIcon={<FaBriefcase />} colorScheme="purple" variant="solid" m={2}>
              Portfolio
            </Button>
          </Link>
          <Link to="/contact">
            <Button leftIcon={<FaEnvelope />} colorScheme="teal" variant="solid" m={2}>
              Contact
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Index;