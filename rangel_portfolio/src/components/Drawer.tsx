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
import { Link, Text } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link as ScrollLink } from "react-scroll";

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
        m={"10px"}
      />
      <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent
          backgroundColor="rgba(0, 0, 0, 0.7)"
          backdropFilter="blur(10px)"
        >
          <DrawerCloseButton color={"white"} />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
              margin="10px"
              fontSize="20px"
            >
              <ScrollLink
                to="Home-section"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Button variant="ghost" colorScheme="cyan" m={"10px"}>
                  Home
                </Button>
              </ScrollLink>
              <ScrollLink
                to="About-section"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Button variant="ghost" colorScheme="cyan" m={"10px"}>
                  About
                </Button>
              </ScrollLink>
              <ScrollLink
                to="showcase"
                spy={true}
                smooth={true}
                duration={500}
                offset={-60}
              >
                <Button variant="ghost" colorScheme="cyan" m={"10px"}>
                  Photos
                </Button>
              </ScrollLink>
              <ScrollLink
                to="Content-section"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Button variant="ghost" colorScheme="cyan" m={"10px"}>
                  Academics
                </Button>
              </ScrollLink>
              <ScrollLink
                to="Projects-section"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Button variant="ghost" colorScheme="cyan" m={"10px"}>
                  Projects
                </Button>
              </ScrollLink>
              <ScrollLink
                to="Technologies-section"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Button variant="ghost" colorScheme="cyan" m={"10px"}>
                  Technology
                </Button>
              </ScrollLink>
              <ScrollLink
                to="Contact-section"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Button variant="ghost" colorScheme="cyan" m={"10px"}>
                  Contact
                </Button>
              </ScrollLink>

              {/* <Button variant="ghost" colorScheme="cyan" m={"10px"}>
                <Link href="/blog">Rangel.blog</Link>
              </Button> */}
            </Flex>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default NavDrawer;
