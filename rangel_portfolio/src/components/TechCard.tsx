import React from "react";
import { Box, Card, Container, Heading } from "@chakra-ui/react";

interface TechCardProps {
  name: string;
  icon: React.ReactNode;
}

interface TechCardListProps {
  techCards: TechCardProps[];
  header: string;
}

const cardStyles = {
  p: 3,
  bg: "gray.700",
  m: "20px",
  boxShadow: "8px 6px 0px 1px #38a169",
  color: "white",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  transition: "all 0.1s ease-in-out",
  _hover: {
    boxShadow: "8px 6px 15px 0px #905da2",
  },
};

const generateTechCards = (techCards: TechCardProps[]) => {
  return techCards.map((cardProps, index) => (
    <Box key={index} mt={2}>
      <Card display={"flex"} alignItems={"center"} fontSize={"18px"} sx={cardStyles}>
        <Box mx={5} display={"flex"} alignItems={"center"}>{cardProps.icon}</Box>
        {cardProps.name}
      </Card>
    </Box>
  ));
};

const TechCard = ({ techCards, header }: TechCardListProps) => {
  return (
      <Container
        w={"100%"}
        mx={"auto"}
        display={"grid"}
        justifyContent={"start"}
      >
        <Box
          w={"315px"}
          display={"flex"}
          justifyContent={"flex-start"}
          color={"white"}
        >
          <Heading>{header}</Heading>
        </Box>
        <Box>{generateTechCards(techCards)}</Box>
      </Container>
  );
};

export default TechCard;
