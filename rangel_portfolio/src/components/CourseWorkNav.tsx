// CourseWorkNav.tsx
import React, { useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import CourseWorkContent from "./CourseWorkContent"; // Ensure this is correctly imported

const CourseWorkNav: React.FC = () => {
  const terms = ["Spring 23", "Fall 23", "Spring 24"];
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Tabs
      isFitted
      variant="enclosed"
      onChange={setSelectedIndex}
      mt={10}
      color={"white"}
    >
      <TabList mb="1em">
        {terms.map((term, index) => (
          <Tab key={index}>{term}</Tab>
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
  );
};

export default CourseWorkNav;
