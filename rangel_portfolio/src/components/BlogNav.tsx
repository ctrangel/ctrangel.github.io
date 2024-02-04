// BlogNav.tsx

import React from "react";
import { Box, Flex, Link, Spacer } from "@chakra-ui/react";

const BlogNav: React.FC = () => {
  return (
    <Box as="nav" p={4} bg="#905DA2" color="white" w={"100%"}>
      <Flex>
        <Link href="/">Home</Link>
        <Spacer />
        <Link href="/blog">Blog</Link>
      </Flex>
    </Box>
  );
};

export default BlogNav;
