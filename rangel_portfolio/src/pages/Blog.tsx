// BlogPage.tsx

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Box, Heading, VStack } from "@chakra-ui/react";
import BlogNav from "../components/BlogNav";

type BlogPost = {
  id: number;
  title: string;
  content: string;
};

type BlogPageProps = {
  posts: BlogPost[];
};

const BlogPage: React.FC<BlogPageProps> = ({ posts }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
  };

  return (
    <Box>
      <BlogNav />
      <VStack align="center" spacing={4}>
        <Heading size="xl">Blog Page</Heading>

        <VStack spacing={4} align="stretch" w="100%">
          {posts.map((post) => (
            <Box
              key={post.id}
              p={4}
              onClick={() => handlePostClick(post)}
              borderWidth="1px"
              borderRadius="lg"
              cursor="pointer"
              _hover={{ borderColor: "gray.300" }}
            >
              <Heading size="md">{post.title}</Heading>
            </Box>
          ))}
        </VStack>

        {selectedPost && (
          <VStack spacing={4} align="stretch" w="100%">
            <Heading size="lg">{selectedPost.title}</Heading>
            <Box>{selectedPost.content}</Box>
          </VStack>
        )}
      </VStack>
    </Box>
  );
};
export default BlogPage;
