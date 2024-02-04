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
  "public/images/pic1.jpg",
  "public/images/pic2.jpg",
  "public/images/pic3.jpg",
  "public/images/pic4.jpg",
  "public/images/pic5.jpg",
  "public/images/pic6.jpg",
  "public/images/pic7.jpg",
  "public/images/pic8.jpg",
  "public/images/pic9.jpg",
  "public/images/pic10.jpg",
  "public/images/pic11.jpg",
  "public/images/pic12.jpg",
  "public/images/pic13.jpg",
  "public/images/pic14.jpg",
  "public/images/pic15.jpg",
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
