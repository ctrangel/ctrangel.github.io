import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Drawer from "./Drawer";
import { Image } from "@chakra-ui/react";

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
        backgroundColor: "black",
        opacity: "0.7",
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Drawer />
      </div>
      <Box>
        <Image
          borderRadius="full"
          boxSize="45px"
          src="/Escaneado_20220606-1249.png"
          alt="home-icon"
          style={{
            margin: "10px",
          }}
        />
      </Box>
    </Flex>
  );
};

export default Navbar;
