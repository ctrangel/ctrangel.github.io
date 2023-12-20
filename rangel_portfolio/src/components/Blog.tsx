// Blog.tsx
import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

interface BlogPost {
  id: number;
  title: string;
  content: string;
}

interface BlogProps {
  blogPosts: BlogPost[];
}

const Blog: React.FC<BlogProps> = ({ blogPosts }) => {
  return (
    <VStack align="start" spacing={6} p={8}>
      <Heading as="h1" fontSize="3xl" mb={6}>
        Blog
      </Heading>
      {blogPosts.map((post) => (
        <Box key={post.id} w="100%">
          <Heading as="h2" fontSize="2xl" mb={2}>
            {post.title}
          </Heading>
          <Text>{post.content}</Text>
        </Box>
      ))}
    </VStack>
  );
};

export default Blog;
