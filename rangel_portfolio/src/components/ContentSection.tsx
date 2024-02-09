import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import MiniNavbar from './MiniNav'; // Adjust the import path as needed
import BlogContent from './BlogContent';
import CourseWorkContent from './CourseWorkContent';
import SpotifyEmbedContent from './SpotifyContent';

const ContentSection: React.FC = () => {
  const [activeContent, setActiveContent] = useState<string>('blog');

  return (
    <Box>
      <MiniNavbar setActiveContent={setActiveContent} />
      {activeContent === 'blog' && <BlogContent />}
      {activeContent === 'coursework' && <CourseWorkContent />}
      {activeContent === 'spotify' && <SpotifyEmbedContent />}
    </Box>
  );
};

export default ContentSection;
