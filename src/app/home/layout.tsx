import React from 'react';
import { Box, Flex } from "@chakra-ui/react";
import Footer from '../ui/login/home/footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Flex direction="column" minHeight="100vh">
      <Box flex="1">

        {children}
      </Box>
    
      <Box bg="gray.100" py={4} textAlign="center">
        <Footer/>
      </Box>
    </Flex>
  );
}
