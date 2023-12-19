import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Drawer from "./Drawer";
import { Image } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "@chakra-ui/react";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <Flex
      style={{
        position: "sticky",
        top: "0",
        zIndex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backdropFilter: "blur(10px)",
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Drawer />
      </div>
      <Box>
        <Link
          as={ScrollLink}
          to="Home-section"
          spy={true}
          smooth={true}
          duration={500}
        >
          <Image
            borderRadius="full"
            boxSize="45px"
            src="/Escaneado_20220606-1249.png"
            alt="home-icon"
            style={{
              margin: "10px",
            }}
          />
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
