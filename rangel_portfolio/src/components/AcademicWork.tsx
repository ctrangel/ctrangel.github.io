import React from "react";
import {
  Box,
  Text,
  VStack,
  HStack,
  Tag,
  Link as ChakraLink,
} from "@chakra-ui/react";

const AcademicWork: React.FC = () => {
  const academicWorks = [
    {
      id: 1,
      title: "Charlie Wilson's War: A book review",
      author: "Christian Rangel",
      date: "10/28/23",
      course: "American National Government",
      highlights: ["Paper", "Book Review", "Historical"],
      pdfUrl: "/posts/charlie_review.pdf", // Make sure this is the correct path
    },
    {
      id: 2,
      title: "The Privatization of Government Functions",
      author: "Christian Rangel",
      date: "10/28/23",
      course: "American National Government",
      highlights: ["Paper", "Analysis", "Report"],
      pdfUrl: "/posts/final_essay.pdf",
    },
  ];

  return (
    <>
      {academicWorks.map((work) => (
        <VStack
          key={work.id}
          w={{ base: "100%", sm: "22em", md: "40em", lg: "55em" }}
          maxW={{ base: "100%", sm: "22em", md: "40em", lg: "55em" }}
          mt={4}
          mb={4}
          align="start"
          p={5}
          boxShadow="md"
          rounded="md"
          bg="grey"
          color="white"
          spacing={3}
        >
          <Text fontWeight="bold" fontSize="xl">
            {work.title}
          </Text>
          <Text fontSize="md">{work.author}</Text>
          <Text fontSize="md">{work.date}</Text>
          <Text fontSize="md">{work.course}</Text>
          <HStack spacing={2} wrap="wrap">
            {work.highlights.map((highlight, index) => (
              <Tag
                size="md"
                key={index}
                borderRadius="full"
                variant="solid"
                background={"#905da2"}
              >
                {highlight}
              </Tag>
            ))}
          </HStack>
          <ChakraLink
            href={work.pdfUrl}
            isExternal
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            p={2}
            borderRadius="md"
            borderColor="white"
            background={"whiteAlpha.300"}
            textDecor={"none"}
          >
            Read Paper
          </ChakraLink>
        </VStack>
      ))}
    </>
  );
};

export default AcademicWork;
