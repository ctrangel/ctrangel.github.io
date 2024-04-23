import React, { useState } from "react";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useBreakpointValue,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  useDisclosure,
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [password, setPassword] = useState("");
  const [accessGranted, setAccessGranted] = useState(false);

  const checkPassword = () => {
    if (password === "0301") {
      
      setAccessGranted(true);
      setActiveContent("Creative Writing");
      if (!isContentVisible) toggleContentVisibility();
      onClose();
    } else {
      alert("Womp Womp, try again");
    }
  };

  const handleContentClick = (content: string) => {
    if (content === "Creative Writing" && !accessGranted) {
      onOpen();
    } else {
      setActiveContent(content);
      if (!isContentVisible) toggleContentVisibility();
    }
  };

  const isMobile = useBreakpointValue({ base: true, lg: false });

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
            {["Academic Work", "Coursework", "Creative Writing", "Spotify"].map(
              (content) => (
                <MenuItem
                  key={content}
                  onClick={() => handleContentClick(content)}
                >
                  {content.charAt(0).toUpperCase() + content.slice(1)}
                </MenuItem>
              )
            )}
          </MenuList>
        </Menu>
      ) : (
        ["Academic Work", "Coursework", "Creative Writing", "Spotify"].map(
          (content) => (
            <Button
              key={content}
              color={activeContent === content ? "black" : "white"}
              backgroundColor={
                activeContent === content ? "white" : "transparent"
              }
              variant="ghost"
              onClick={() => handleContentClick(content)}
              _hover={{ color: "black", backgroundColor: "white" }}
            >
              {content.charAt(0).toUpperCase() + content.slice(1)}
            </Button>
          )
        )
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter passcode to gain entry to creative works</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Enter Passcode"
              maxLength={4}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="purple" mr={3} onClick={checkPassword}>
              Submit
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default MiniNavbar;
