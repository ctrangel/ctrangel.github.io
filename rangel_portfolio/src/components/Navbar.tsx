import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import Drawer from "./Drawer";

const Navbar = ({ children }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <Box bg="black" color="white" p={4} w="100%" opacity="0.5">
      <Drawer isOpen={isNavbarOpen} onClose={toggleNavbar} />
      {children}
    </Box>
  );
};

export default Navbar;
