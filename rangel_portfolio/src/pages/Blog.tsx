// BlogPage.tsx

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Box, Heading, VStack } from "@chakra-ui/react";
import BlogNav from "../components/BlogNav";

const BlogPage = () => {
  return (
    <Box
      id="Blog-section"
      h={"100em"}
      color="black"
      backgroundColor="white"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      w={"100%"}
    >
      <BlogNav />
      <VStack align="center" spacing={4}>
        <Box
          mt={40}
          mb={20}
          w={"100%"}
          height={"10em"}
          borderLeft={"1px solid"}
          display={"flex"}
          justifyContent={"left"}
          alignItems={"center"}
          borderColor={"#905DA2"}
        >
          <Heading size="xl" m={2}>
            Rangel Blog
          </Heading>
        </Box>
      </VStack>
    </Box>
  );
};
export default BlogPage;
