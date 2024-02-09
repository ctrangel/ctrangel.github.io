import React from "react";
import { Box, Button } from "@chakra-ui/react";

interface MiniNavbarProps {
  setActiveContent: (contentName: string) => void;
  toggleContentVisibility: () => void;
  isContentVisible: boolean;
  activeContent: string | null; // Allow activeContent to be string or null
}


const MiniNavbar: React.FC<MiniNavbarProps> = ({
  setActiveContent,
  toggleContentVisibility,
  isContentVisible,
  activeContent, // Use this to determine the active tab
}) => {
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
        color="white"
        variant="ghost"
        onClick={toggleContentVisibility}
        _hover={{ color: "black", backgroundColor: "white" }}
      >
        {isContentVisible ? "Hide Content" : "Show Content"}
      </Button>
      {["blog", "coursework", "spotify"].map((content) => (
        <Button
          key={content}
          color={activeContent === content ? "black" : "white"} // Change text color based on active state
          backgroundColor={activeContent === content ? "white" : "transparent"} // Ensure background is white for active tab
          variant="ghost"
          onClick={() => {
            setActiveContent(content);
            if (!isContentVisible) toggleContentVisibility();
          }}
          _hover={{ color: "black", backgroundColor: "white" }}
        >
          {content.charAt(0).toUpperCase() + content.slice(1)}
        </Button>
      ))}
    </Box>
  );
};

export default MiniNavbar;
