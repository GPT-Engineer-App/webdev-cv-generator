import { Container, Text, VStack, Heading, Box, Link, List, ListItem, ListIcon, HStack, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8} align="start">
        <Box>
          <Heading as="h1" size="2xl" mb={4}>
            Web Developer CV
          </Heading>
          <Text fontSize="lg">Aspiring web developer with a strong foundation in computer science and hands-on experience in building web applications. Passionate about learning new technologies and solving complex problems.</Text>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Profile Summary
          </Heading>
          <Text fontSize="md">A dedicated and efficient web developer with a solid understanding of front-end and back-end technologies. Experienced in creating responsive and user-friendly web applications using modern frameworks and libraries.</Text>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Skills
          </Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaGithub} color="teal.500" />
              Proficient in HTML, CSS, JavaScript, and React
            </ListItem>
            <ListItem>
              <ListIcon as={FaGithub} color="teal.500" />
              Experience with Node.js, Express, and MongoDB
            </ListItem>
            <ListItem>
              <ListIcon as={FaGithub} color="teal.500" />
              Familiar with version control systems like Git
            </ListItem>
            <ListItem>
              <ListIcon as={FaGithub} color="teal.500" />
              Knowledge of RESTful API design and development
            </ListItem>
            <ListItem>
              <ListIcon as={FaGithub} color="teal.500" />
              Understanding of Agile methodologies and Scrum framework
            </ListItem>
          </List>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Accomplishments
          </Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaGithub} color="teal.500" />
              Developed a full-stack web application for a local business, improving their online presence and customer engagement
            </ListItem>
            <ListItem>
              <ListIcon as={FaGithub} color="teal.500" />
              Contributed to open-source projects on GitHub, enhancing features and fixing bugs
            </ListItem>
            <ListItem>
              <ListIcon as={FaGithub} color="teal.500" />
              Completed multiple online courses and certifications in web development and computer science
            </ListItem>
          </List>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Academic Modules
          </Heading>
          <List spacing={3}>
            <ListItem>
              <Link href="https://www.keele.ac.uk/study/undergraduate/courses/computer-science/" isExternal color="teal.500">
                Introduction to Programming
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.keele.ac.uk/study/undergraduate/courses/computer-science/" isExternal color="teal.500">
                Data Structures and Algorithms
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.keele.ac.uk/study/undergraduate/courses/computer-science/" isExternal color="teal.500">
                Web Technologies
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.keele.ac.uk/study/undergraduate/courses/computer-science/" isExternal color="teal.500">
                Database Systems
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.keele.ac.uk/study/undergraduate/courses/computer-science/" isExternal color="teal.500">
                Software Engineering
              </Link>
            </ListItem>
          </List>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Preferred Areas for Third-Year Projects
          </Heading>
          <Text fontSize="md">I am particularly interested in projects that involve:</Text>
          <List spacing={3} mt={2}>
            <ListItem>
              <ListIcon as={FaGithub} color="teal.500" />
              Developing scalable web applications using modern frameworks
            </ListItem>
            <ListItem>
              <ListIcon as={FaGithub} color="teal.500" />
              Implementing machine learning algorithms for data analysis
            </ListItem>
            <ListItem>
              <ListIcon as={FaGithub} color="teal.500" />
              Creating interactive and user-friendly UI/UX designs
            </ListItem>
            <ListItem>
              <ListIcon as={FaGithub} color="teal.500" />
              Exploring blockchain technology and its applications
            </ListItem>
          </List>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Contact
          </Heading>
          <HStack spacing={4}>
            <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" as={Link} href="https://github.com" isExternal />
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" as={Link} href="https://linkedin.com" isExternal />
            <IconButton aria-label="Email" icon={<FaEnvelope />} size="lg" as={Link} href="mailto:example@example.com" />
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
