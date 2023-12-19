import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { Button, useDisclosure } from "@chakra-ui/react";
import {Link, Text } from "@chakra-ui/react";
import { IconButton} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";


function NavDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <IconButton
        colorScheme="cyan"
        aria-label="Open menu"
        icon={<HamburgerIcon />}
        onClick={onOpen}
        style={{
          margin: "10px",
      }}
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Butter The Dog</DrawerHeader>

          <DrawerBody>
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Text
                    as="a"
                    textDecoration="none"
                    className="nav-link active"
                  >
                    Home
                  </Text>
                </li>
                <li className="nav-item">
                  <Text as="a" textDecoration="none" className="nav-link">
                    About
                  </Text>
                </li>
                <li className="nav-item">
                  <Text as="a" textDecoration="none" className="nav-link">
                    Contact
                  </Text>
                </li>
              </ul>
            </Flex>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default NavDrawer;
