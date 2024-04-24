import React from "react";
import {
  Box,
  Text,
  VStack,
  HStack,
  Tag,
  Link as ChakraLink,
  Heading,
} from "@chakra-ui/react";

const CreativeWriting: React.FC = () => {
  const shortStories = [
    {
      id: 1,
      title: "Strings of Perception",
      author: "Christian Rangel",
      date: "4/22/24",
      course: "Art of the Short Story",
      highlights: ["Short Story", "Fiction"],
      pdfUrl:
        "/posts/ChristianRangel_ENGL254DB_Short-Story-Draft-3_4-22-24.pdf",
    },
    {
      id: 2,
      title: "Retirement Shim Shim",
      author: "Christian Rangel",
      date: "2/18/24",
      course: "Art of the Short Story",
      highlights: ["Short Story", "Fiction"],
      pdfUrl: "/posts/Rangel_Christian_story B_Draft_1.pdf",
    },
  ];

  const readings = [
    {
      id: 1,
      title: "Why I like Country Music, an analysis",
      author: "Christian Rangel",
      date: "1/18/24",
      course: "Art of the Short Story",
      highlights: ["Paper", "Analysis", "Report"],
      pdfUrl: "/posts/Christian_McPherson_Reading.pdf",
    },
    {
      id: 2,
      title: "Reading/Response: 'Manus' by Anjali Sachdeva",
      author: "Christian Rangel",
      date: "3/28/24",
      course: "The Art of the Short Story",
      highlights: ["Paper", "Analysis", "Reading", "fiction"],
      pdfUrl: "/posts/Christian_Reading_Manus-1.pdf",
    },
    {
      id: 3,
      title:
        "Reading/Response: “Everything Is Far From Here” by Cristina Henríquez",
      author: "Christian Rangel",
      date: "3/06/24",
      course: "The Art of the Short Story",
      highlights: ["Paper", "Analysis", "Reading"],
      pdfUrl: "/posts/short-story1.pdf",
    },
    {
      id: 4,
      title: "Reading/Response: “Sea Oak” by George Saunders",
      author: "Christian Rangel",
      date: "3/30/24",
      course: "The Art of the Short Story",
      highlights: ["Paper", "Analysis", "Reading"],
      pdfUrl: "/posts/Christian_Reading_Sea-Oak-1.pdf",
    },
  ];

  const writingSamples = [
    {
      id: 1,
      title: "Tipping Turning Point",
      author: "Christian Rangel",
      date: "1/11/24",
      course: "Art of the Short Story",
      highlights: ["creative writing", "short story", "creative nonfiction"],
      pdfUrl: "/posts/Christian_Rangel_Tipping_Turning_Point.pdf",
    },
    {
      id: 2,
      title: "The 'Prohibition'",
      author: "Christian Rangel",
      date: "1/17/24",
      course: "The Art of the Short Story",
      highlights: ["Short Story", "Memoir", "Nonfiction"],
      pdfUrl: "/posts/Christian_story_prohibition.pdf",
    },
    {
      id: 3,
      title: "The New House",
      author: "Christian Rangel",
      date: "2/02/24",
      course: "Art of the Short Story",
      highlights: ["Writing Sample", "Fiction"],
      pdfUrl: "/posts/Christian_The_new_house.pdf",
    },
    {
      id: 4,
      title: "The Blind Writer",
      author: "Christian Rangel",
      date: "2/08/24",
      course: "Art of the Short Story",
      highlights: ["Writing Sample", "Fiction"],
      pdfUrl: "/posts/Christian_the_Blind_Writer.pdf",
    },
    {
      id: 5,
      title: "Showing/Telling",
      author: "Christian Rangel",
      date: "3/11/24",
      course: "Art of the Short Story",
      highlights: ["Writing Sample", "Fiction"],
      pdfUrl: "/posts/Christian_Showing_Telling.pdf",
    },
    {
      id: 6,
      title: "The Bandit's Story",
      author: "Christian Rangel",
      date: "4/3/24",
      course: "Art of the Short Story",
      highlights: ["Writing Sample", "Fiction", "Nonfiction"],
      pdfUrl: "/posts/Christian_Bandit's-Story.pdf",
    },
  ];

  return (
    <>
      <VStack align="start" spacing={5}>
        <Box>
          <Heading m={4} color={"white"}>
            Short Stories
          </Heading>
          {shortStories.map((work) => (
            <WorkCard work={work} key={work.id} />
          ))}
        </Box>
        <Box>
          <Heading m={4} color={"white"}>
            Writing Samples
          </Heading>
          {writingSamples.map((work) => (
            <WorkCard work={work} key={work.id} />
          ))}
        </Box>
        <Box>
          <Heading m={4} color={"white"}>
            Readings
          </Heading>
          {readings.map((work) => (
            <WorkCard work={work} key={work.id} />
          ))}
        </Box>
      </VStack>
    </>
  );
};

const WorkCard = ({ work }: { work: any }) => (
  <VStack
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
      {work.highlights.map(
        (
          highlight:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | Iterable<React.ReactNode>
            | React.ReactPortal
            | null
            | undefined,
          index: React.Key | null | undefined
        ) => (
          <Tag
            size="md"
            key={index}
            borderRadius="full"
            variant="solid"
            background={"#905da2"}
          >
            {highlight}
          </Tag>
        )
      )}
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
);

export default CreativeWriting;
