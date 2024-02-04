import React, { useState } from "react";
import {
  Box,
  Container,
  Image,
  Button,
  Center,
  Collapse,
  SlideFade,
} from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { animateScroll as scroll } from "react-scroll";
import { Link as ChakraLink } from "react-scroll";

const imagePaths = [
  "/images/pic1.jpg",
  "/images/pic2.jpg",
  "/images/pic3.jpg",
  "/images/pic4.jpg",
  "/images/pic5.jpg",
  "/images/pic6.jpg",
  "/images/pic7.jpg",
  "/images/pic8.jpg",
  "/images/pic9.jpg",
  "/images/pic10.jpg",
  "/images/pic11.jpg",
  "/images/pic12.jpg",
  "/images/pic13.jpg",
  "/images/pic14.jpg",
  "/images/pic15.jpg",
];

const Photography: React.FC = () => {
  const [showMore, setShowMore] = useState<boolean>(false); // Set initial state to false
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
    rootMargin: "0px 0px -10% 0px",
  });

  const handleShowMore = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowMore(!showMore);
  };

  return (
    <Box mt={"3em"}>
      <SlideFade ref={ref} in={inView} offsetY="-50px">
        <Container maxW="7xl" p={0}>
          <Collapse startingHeight={0} in={showMore}>
            <Box
              w="100%"
              maxW="100%"
              mx="auto"
              sx={{ columnCount: [2, 2, 3, 4, 5], columnGap: "4px" }}
            >
              {imagePaths.map((image, index) => (
                <Image key={index} src={image} alt="img" mb={1} />
              ))}
            </Box>
          </Collapse>
          <Center pt={5}>
            <ChakraLink to="showcase" spy={true} smooth={true} duration={100}>
              <Button
                aria-label={showMore ? "Show Less" : "Show More"}
                onClick={handleShowMore}
              >
                {showMore ? "Show Less" : "Show More"}
              </Button>
            </ChakraLink>
          </Center>
        </Container>
      </SlideFade>
    </Box>
  );
};

export default Photography;
