import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import MiniNavbar from "./MiniNav"; // Ensure the path matches your project structure
import BlogContent from "./BlogContent";
import CourseWorkContent from "./CourseWorkContent";
import SpotifyEmbedContent from "./SpotifyContent";

const ContentSection: React.FC = () => {
  const [activeContent, setActiveContent] = useState<string | null>(null); // Allow null to indicate no content selected
  const [isContentVisible, setIsContentVisible] = useState<boolean>(false); // State to control visibility of content area

  const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible);
    // Set default content to "blog" if opening and no content is currently active
    if (!isContentVisible && !activeContent) {
      setActiveContent("blog");
    }
  };

  return (
    <Box>
      <MiniNavbar
        setActiveContent={setActiveContent}
        toggleContentVisibility={toggleContentVisibility}
        isContentVisible={isContentVisible}
        activeContent={activeContent} // Pass this prop to MiniNavbar
      />
      {isContentVisible && activeContent && (
        <>
          {activeContent === "blog" && <BlogContent />}
          {activeContent === "coursework" && <CourseWorkContent />}
          {activeContent === "spotify" && <SpotifyEmbedContent />}
        </>
      )}
    </Box>
  );
};

export default ContentSection;
