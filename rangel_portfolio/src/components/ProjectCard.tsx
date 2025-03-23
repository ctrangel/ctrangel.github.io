import React from "react";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  IconButton,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";
import { FaGithub, FaLink } from "react-icons/fa";
import shakeAnimation from "./ShakeAnimation";

interface Project {
  title: string;
  githubLink?: string; // optional
  link?: string; // optional
  imageSrc: string;
  description: string;
  gifSrc?: string; // optional gif for hover effect
  skills: string[];
  altText: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const renderSkills = () =>
    project.skills.map((skill, index) => (
      <Box
        key={index}
        borderRadius="md"
        bg="#FFB612"
        color="white"
        px={3}
        py={1}
        mr={2}
        mt={2}
        fontSize="sm"
      >
        {skill}
      </Box>
    ));

  return (
    <>
      <Card
        position="relative"
        w={{ base: "300px", sm: "340px", lg: "320px", xl: "390px" }}
        h="520px"
        p={4}
        color="white"
        bg="gray.700"
        borderRadius="10px"
        boxShadow="md"
        display="flex"
        flexDirection="column"
      >
        {/* Top-right icon buttons */}
        <Box position="absolute" top={4} right={4} zIndex={1}>
          {project.link && (
            <IconButton
              aria-label="External Link"
              icon={<FaLink />}
              size="md"
              color="white"
              bg="#FFB612"
              mr={2}
              onClick={() => window.open(project.link, "_blank")}
              transition="0.3s"
              _hover={{
                bg: "#905DA2",
                animation: `${shakeAnimation} infinite 0.6s`,
              }}
            />
          )}
          {project.githubLink && (
            <IconButton
              aria-label="GitHub"
              icon={<FaGithub />}
              size="md"
              color="white"
              bg="#FFB612"
              onClick={() => window.open(project.githubLink, "_blank")}
              transition="0.3s"
              _hover={{
                bg: "#905DA2",
                animation: `${shakeAnimation} infinite 0.6s`,
              }}
            />
          )}
        </Box>

        {/* Header */}
        <CardHeader pt={0} pb={2} mb={2}>
          <Text fontSize="2xl" fontWeight="bold" noOfLines={1}>
            {project.title}
          </Text>
        </CardHeader>

        {/* Image container – shows full image without cropping */}
        <Box
          flex="1"
          position="relative"
          overflow="hidden"
          borderRadius="md"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleImageClick}
          cursor="pointer"
          bg="gray.700"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            maxW="100%"
            maxH="100%"
            objectFit="contain"
            transition="transform 0.3s ease"
            transform={isHovered ? "scale(1.05)" : "scale(1)"}
            src={
              isHovered && project.gifSrc ? project.gifSrc : project.imageSrc
            }
            alt={project.altText}
          />
        </Box>

        {/* Body text for description */}
        <CardBody pt={2} pb={2} minH="120px" overflowY="auto">
          <Text
            fontSize="md"
            textAlign="left"
            lineHeight="1.6"
            color="gray.100"
          >
            {project.description}
          </Text>
        </CardBody>

        {/* Skills */}
        <CardFooter pt={2}>
          <Box display="flex" flexWrap="wrap">
            {renderSkills()}
          </Box>
        </CardFooter>
      </Card>

      {/* Full-screen modal for expanded image */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        size="full"
      >
        <ModalOverlay />
        <ModalContent bg="transparent" boxShadow="none">
          <ModalCloseButton color="white" />
          <Image
            src={project.imageSrc}
            alt={project.altText}
            objectFit="contain"
            w="100%"
            h="100vh"
          />
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProjectCard;
