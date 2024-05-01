import { Box, Heading, Text } from '@chakra-ui/react';

const Contact = () => {
  return (
    <Box bg="teal.300" color="white" p={5} minH="100vh">
      <Heading as="h1" size="xl" mb={4}>Contact Us</Heading>
      <Text fontSize="lg">
        Have any questions or want to get in touch? Feel free to contact us through our social media channels or email.
      </Text>
    </Box>
  );
};

export default Contact;