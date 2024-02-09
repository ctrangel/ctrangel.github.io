import React from 'react';
import { Box, Button } from '@chakra-ui/react';

interface MiniNavbarProps {
  setActiveContent: (contentName: string) => void;
}

const MiniNavbar: React.FC<MiniNavbarProps> = ({ setActiveContent }) => {
  return (
    <Box display="flex" gap="4" p="4" alignItems="center" justifyContent="center" backgroundColor="#2D3748" borderRadius="md">
      <Button colorScheme="teal" variant="ghost" onClick={() => setActiveContent('blog')}>
        Blog
      </Button>
      <Button colorScheme="teal" variant="ghost" onClick={() => setActiveContent('coursework')}>
        Course Work
      </Button>
      <Button colorScheme="teal" variant="ghost" onClick={() => setActiveContent('spotify')}>
        Spotify
      </Button>
    </Box>
  );
};

export default MiniNavbar;
