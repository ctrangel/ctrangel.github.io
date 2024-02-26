import React from "react";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useBreakpointValue,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

interface MiniNavbarProps {
  setActiveContent: (contentName: string) => void;
  toggleContentVisibility: () => void;
  isContentVisible: boolean;
  activeContent: string | null;
}

const MiniNavbar: React.FC<MiniNavbarProps> = ({
  setActiveContent,
  toggleContentVisibility,
  isContentVisible,
  activeContent,
}) => {
  // Determine if the screen is smaller than 768px
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      display="flex"
      gap="3"
      p={2}
      alignItems="center"
      justifyContent="center"
      backgroundColor="#905da2"
      borderRadius="md"
      mt={"8em"}
      w={{ base: "100%", sm: "22em", md: "40em", lg: "55em" }}
    >
      <Button
        color="white"
        variant="ghost"
        onClick={toggleContentVisibility}
        _hover={{ color: "black" }}
      >
        {isContentVisible ? "Hide Content" : "Show Content"}
      </Button>

      {isMobile ? (
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon />}
            variant="outline"
            color="white"
            _hover={{ color: "black", backgroundColor: "white" }}
          />
          <MenuList>
            {["Academic Work", "coursework", "spotify"].map((content) => (
              <MenuItem
                key={content}
                onClick={() => {
                  setActiveContent(content);
                  if (!isContentVisible) toggleContentVisibility();
                }}
              >
                {content.charAt(0).toUpperCase() + content.slice(1)}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      ) : (
        ["Academic Work", "coursework", "spotify"].map((content) => (
          <Button
            key={content}
            color={activeContent === content ? "black" : "white"}
            backgroundColor={
              activeContent === content ? "white" : "transparent"
            }
            variant="ghost"
            onClick={() => {
              setActiveContent(content);
              if (!isContentVisible) toggleContentVisibility();
            }}
            _hover={{ color: "black", backgroundColor: "white" }}
          >
            {content.charAt(0).toUpperCase() + content.slice(1)}
          </Button>
        ))
      )}
    </Box>
  );
};

export default MiniNavbar;
