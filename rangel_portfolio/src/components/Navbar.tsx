import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Image,
  Link as ChakraLink,
  Text,
  Button,
} from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import Drawer from "./Drawer";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize(); // Check screen size on mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const closeNavbarOnDesktop = () => {
    if (window.innerWidth >= 768) {
      setIsNavbarOpen(false);
    }
  };

  const scrollLinks = [
    { id: "about", text: "About", to: "About-section" },
    { id: "Other", text: "Other", to: "Content-section" },
    { id: "projects", text: "Projects", to: "Projects-section" },
    { id: "technologies", text: "Technologies", to: "Technologies-section" },
    { id: "contact", text: "Contact", to: "Contact-section" },
  ];

  return (
    <Flex
      position="sticky"
      top="0"
      zIndex={1}
      backgroundColor="rgba(0, 0, 0, 0.7)"
      backdropFilter="blur(10px)"
      justifyContent="space-between"
      alignItems="center"
      px={4}
      py={2}
      w={"auto"}
    >
      {/* Home icon */}
      <Box
        _hover={{
          transform: "scale(1.1)",
          transition: "transform 0.2s ease-in-out",
        }}
      >
        <ChakraLink
          as={ScrollLink}
          to="Home-section"
          spy={true}
          smooth={true}
          duration={500}
          onClick={closeNavbarOnDesktop}
        >
          <Image
            borderRadius="full"
            boxSize="45px"
            src="/Escaneado_20220606-1249.png"
            alt="home-icon"
            margin="10px"
          />
        </ChakraLink>
      </Box>

      {/* Drawer component - hide on big screen */}
      {isSmallScreen && <Drawer />}

      {/* Scroll links - hide on small screens */}
      {isSmallScreen ? null : (
        <Flex ml="auto" alignItems="center">
          {scrollLinks.map((link) => (
            <ChakraLink
              key={link.id}
              as={ScrollLink}
              to={link.to}
              spy={true}
              smooth={true}
              duration={500}
              onClick={closeNavbarOnDesktop}
              px={2}
              color="white"
              fontSize="1.2rem"
              fontWeight="bold"
              margin="0 10px"
              textDecoration="none"
              transition="all 0.2s ease-in-out"
              borderRadius={"5px"}
              _hover={{
                bg: "#FFB612",
                color: "black",
              }}
            >
              <Text>{link.text}</Text>
            </ChakraLink>
          ))}

          {/* <ChakraLink
            href="/blog"
            color="white"
            fontSize="1.2rem"
            fontWeight="bold"
            textDecoration="none"
            transition="all 0.2s ease-in-out"
            p={1}
            margin={"0 10px"}
            borderRadius={"5px"}
            _hover={{
              bg: "#905DA2",
              color: "white",
            }}
          >
            Rangel.blog
          </ChakraLink> */}
        </Flex>
      )}
    </Flex>
  );
};

export default Navbar;
