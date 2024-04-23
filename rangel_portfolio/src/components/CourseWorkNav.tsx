import React, { useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import CourseWorkContent from "./CourseWorkContent";

const CourseWorkNav: React.FC = () => {
  const terms = ["Spring 23", "Fall 23", "Spring 24", "Summer 24", "Fall 24"];
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Box w="full" overflowX="hidden">
      <Tabs
        variant="enclosed"
        onChange={setSelectedIndex}
        mt={10}
        color={"white"}
      >
        <TabList
          overflowX="auto"
          whiteSpace="nowrap"
          py={2}
          sx={{
            "&::-webkit-scrollbar": {
              height: "12px", 
              backgroundColor: `rgba(0, 0, 0, 0.05)`, 
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: `rgba(0, 0, 0, 0.3)`, 
              borderRadius: "10px", 
            },
          }}
        >
          {terms.map((term, index) => (
            <Tab key={index} px={5} py={3} minWidth="33.33%" flexShrink={0}>
              {term}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {terms.map((term, index) => (
            <TabPanel key={index} display={"flex"} justifyContent={"center"}>
              <CourseWorkContent selectedTerm={terms[selectedIndex]} />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default CourseWorkNav;
