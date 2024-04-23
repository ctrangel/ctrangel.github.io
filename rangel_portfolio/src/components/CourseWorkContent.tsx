// CourseWorkContent.tsx
import React from "react";
import { Box, Text, VStack, Heading } from "@chakra-ui/react";

interface CourseClass {
  name: string;
  details: string;
}

interface Term {
  term: string;
  classes: CourseClass[];
}

interface CourseWorkContentProps {
  selectedTerm: string;
}

const CourseWorkContent: React.FC<CourseWorkContentProps> = ({
  selectedTerm,
}) => {
  const terms: Term[] = [
    {
      term: "Spring 23",
      classes: [
        {
          name: "Ehical Leadership",
          details: "Exploring the role of ethics in leadership.",
        },
        {
          name: "Problem Solving with Information Technology",
          details: "Introduction to problem solving with IT.",
        },
        {
          name: "Introduction to Programming",
          details: "Introduction to programming concepts.",
        },
        {
          name: "Business Analytics",
          details: "Introduction to business analytics.",
        },
        {
          name: "Owner's manual for the Human Body",
          details: "anatomy and physiology of the human body.",
        },
      ],
    },
    {
      term: "Fall 23",
      classes: [
        {
          name: "Business Law I",
          details: "Basics of law in business, including contracts and sales.",
        },
        {
          name: "Databases",
          details: "Fundamentals of database design and queries.",
        },
        {
          name: "Networking and Security",
          details: "Principles of computer networks and security measures.",
        },
        {
          name: "Data Structures and Algorithms",
          details:
            "Core concepts of data organization and algorithm efficiency.",
        },
        {
          name: "Statistics",
          details: "Introduction to statistical methods and analysis.",
        },
        {
          name: "American National Government",
          details: "Overview of the U.S. government's structure and function.",
        },
      ],
    },
    {
      term: "Spring 24",
      classes: [
        {
          name: "Operations Management & Quantitative Analysis",
          details:
            "Fundamentals of managing operations and analyzing quantitative data in business.",
        },
        {
          name: "Server Management",
          details: "Practical skills for managing and configuring servers.",
        },
        {
          name: "Advanced Programming",
          details:
            "Deep dive into advanced programming techniques and software development.",
        },
        {
          name: "Information Technology for Managers",
          details:
            "Understanding IT essentials for effective management decisions.",
        },
        {
          name: "Oral Communication and Presentation",
          details:
            "Developing skills for impactful public speaking and presentations.",
        },
        {
          name: "The Art of the Short Story",
          details:
            "Exploring storytelling through the study and writing of short stories. I like this one.",
        },
      ],
    },
    {
      term: "Summer 24",
      classes: [
        {
          name: "Organizational Behavior with Topics",
          details:
            "Examines the role of individual and group behavior within work organizations",
        },
        {
          name: "Human Resources Management",
          details: "Overview of HR functions.",
        },
        {
          name: "Principles of Marketing and Sales",
          details:
            "This foundational marketing and sales course introduces students to the principles and practices of marketing and sales",
        },
        {
          name: "Financial Accounting",
          details: "Introduction to financial accounting concepts.",
        },
        {
          name: "Principles of Macroeconomics",
          details: "Introduction to macroeconomic principles.",
        },
      ],
    },
    {
      term: "Fall 24",
      classes: [
        {
          name: "Management Accounting for Decision",
          details:
            "Introduction to management accounting concepts and decision-making.",
        },
        {
          name: "NoSQL Databases",
          details: "Exploring non-relational databases and their applications.",
        },
        {
          name: "Microeconomics",
          details:
            "foundational principles for economic transactions and determination of prices in the marketplace",
        },
        {
          name: "Creative Writing",
          details:
            "Students will write in multiple genres, including but not limited to poetry, fiction, and creative nonfiction, among others",
        },
        {
          name: "Fiction Workshop 1",
          details:
            "Students will write and critique original fiction in a workshop setting.",
        },
        { 
          name: "Public Administration",
          details: "Introduction to public administration and policy-making.",
        }
      ],
    },
  ];

  const termData = terms.find((term) => term.term === selectedTerm);

  return (
    <VStack align="start" spacing={4}>
      {termData ? (
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading size="md" pb={2}>
            {termData.term}{" "}
          </Heading>
          {termData.classes.map((classDetail, index) => (
            <VStack key={index} align="start" spacing={2}>
              <Text
                color={"cyan"}
                fontWeight="bold"
                borderBottom={"1px solid white"}
                pb={2}
              >
                {classDetail.name}
              </Text>
              <Text>{classDetail.details}</Text>
            </VStack>
          ))}
        </Box>
      ) : (
        <Text>No data available for this term.</Text>
      )}
    </VStack>
  );
};

export default CourseWorkContent;
