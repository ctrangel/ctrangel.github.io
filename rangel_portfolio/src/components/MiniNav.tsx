import React from "react";
import { Box, Button, color } from "@chakra-ui/react";

interface MiniNavbarProps {
  setActiveContent: (contentName: string) => void;
}

const MiniNavbar: React.FC<MiniNavbarProps> = ({ setActiveContent }) => {
  return (
    <Box
      display="flex"
      gap="4"
      p="4"
      alignItems="center"
      justifyContent="center"
      backgroundColor="#905da2"
      borderRadius="md"
      mt={10}
    >
      <Button
        color={"white"}
        variant="ghost"
        onClick={() => setActiveContent("blog")}
        _hover={{ color: "black", backgroundColor: "white" }}
      >
        Blog
      </Button>
      <Button
        color={"white"}
        variant="ghost"
        onClick={() => setActiveContent("coursework")}
        _hover={{ color: "black", backgroundColor: "white" }}
      >
        Course Work
      </Button>
      <Button
        color={"white"}
        variant="ghost"
        onClick={() => setActiveContent("spotify")}
        _hover={{ color: "black", backgroundColor: "white" }}
      >
        Spotify
      </Button>
    </Box>
  );
};

export default MiniNavbar;
