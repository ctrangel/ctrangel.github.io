import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import MiniNavbar from "./MiniNav"; 
import AcademicWork from "./AcademicWork";
import SpotifyEmbedContent from "./SpotifyContent";
import CourseWorkNav from "./CourseWorkNav";

const ContentSection: React.FC = () => {
 
  const [activeContent, setActiveContent] = useState<string | null>(
    "Academic Work"
  );
  const [isContentVisible, setIsContentVisible] = useState<boolean>(false); 

  const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <Box
      display={"flex"}
      flexDir={"column"}
      alignContent={"center"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <MiniNavbar
        setActiveContent={setActiveContent}
        toggleContentVisibility={toggleContentVisibility}
        isContentVisible={isContentVisible}
        activeContent={activeContent} // Pass this prop to MiniNavbar
      />
      {isContentVisible && activeContent && (
        <>
          {activeContent === "Academic Work" && <AcademicWork />}
          {activeContent === "coursework" && (
            <Box
              maxW={{ base: "100%", sm: "22em", md: "40em", lg: "55em" }}
              w={{ base: "100%", sm: "22em", md: "40em", lg: "55em" }}
            >
              <CourseWorkNav />
            </Box>
          )}
          {activeContent === "spotify" && <SpotifyEmbedContent />}
        </>
      )}
    </Box>
  );
};

export default ContentSection;
