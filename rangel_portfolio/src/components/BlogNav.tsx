// BlogNav.tsx

import React from "react";
import { Box, Flex, Link, Spacer } from "@chakra-ui/react";

const BlogNav: React.FC = () => {
  return (
    <Box as="nav" p={4} bg="teal.500" color="white">
      <Flex>
        <Link href="/">Home</Link>
        <Spacer />
        <Link href="/blog">Blog</Link>
      </Flex>
    </Box>
  );
};

export default BlogNav;
