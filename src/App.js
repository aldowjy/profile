import { Icon } from "@chakra-ui/icons";
import {
  SiLinkedin,
  SiGmail,
  SiAntdesign,
  SiChakraui,
  SiAdobeillustrator,
  SiAdobephotoshop,
} from "react-icons/si";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaVuejs,
  FaGithub,
  FaBootstrap,
  FaAndroid,
  FaReact,
  FaGitlab,
} from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { RiSketching } from "react-icons/ri";
import "./App.css";
import {
  Box,
  Heading,
  Text,
  Center,
  SimpleGrid,
  Button,
  Flex,
  Spacer,
  HStack,
  Container,
  Image,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Hide,
  Link,
} from "@chakra-ui/react";
import { aldo_picture } from "../src/assets/images";

function App() {
  return (
    <div className="App">
      <Container maxW="container.xl">
        <Flex>
          <Text p={4} color="primary.500" fontWeight="bold">
            dovin
          </Text>
          <Spacer />
          <HStack p={4} spacing={12}>
            <Button variant="ghost" size={["xs", "sm"]} p={2}>
              Home
            </Button>
            <Hide below="md">
              <Button variant="ghost" size={["xs", "sm"]} p={2}>
                Services
              </Button>
              <Button variant="ghost" size={["xs", "sm"]} p={2}>
                About
              </Button>
              <Button variant="ghost" size={["xs", "sm"]} p={2}>
                Skills
              </Button>
              <Button variant="ghost" size={["xs", "sm"]} p={2}>
                Portfolio
              </Button>
              <Button variant="ghost" size={["xs", "sm"]} p={2}>
                Contact
              </Button>
            </Hide>
          </HStack>
        </Flex>
      </Container>

      <Box p={[4, 6, 8, 16]} m={[4, 6, 8, 16]}>
        <Box
          maxW="xl"
          borderWidth="2px"
          borderColor="#1978BC"
          borderRadius="xl"
          overflow="hidden"
          p={[4, 6, 8, 16]}
          position="relative"
          boxShadow={["5px 5px #1978BC", "10px 10px #1978BC"]}
        >
          <Heading
            as="h2"
            size="xl"
            fontSize={["sm", "md", "lg", "xl"]}
            color="primary.500"
          >
            Hello,
          </Heading>
          <Heading
            as="h1"
            size="4xl"
            mb={4}
            fontSize={["xl", "2xl", "3xl", "4xl"]}
            color="primary.500"
          >
            I am Aldo Wijaya
          </Heading>
          <Heading
            as="h3"
            size="lg"
            mb={[4, 6, 8, 16]}
            fontSize={["xs", "sm", "md", "lg"]}
          >
            professional web developer, freelancer and a gamer.
          </Heading>
          <Button variant="solid">My Portfolio</Button>
        </Box>
      </Box>

      <Box p={[4, 6, 8, 16]} m={[4, 6, 8, 16]}>
        <Center mb={2}>
          <Text
            fontSize={["md", "lg", "xl", "2xl"]}
            fontWeight="bold"
            color="primary.500"
          >
            My Services
          </Text>
        </Center>
        <Center mb={[4, 6, 8, 16]}>
          <Text fontSize={["xs", "sm", "md", "lg"]} align={["center"]}>
            below are some services that you can use.
          </Text>
        </Center>
        <Center>
          <SimpleGrid columns={[2, 3]} spacing={12} mb={8} textAlign="center">
            <Box
              bg="primary.500"
              h={[250]}
              w={[150, 250, 350]}
              p={4}
              borderRadius="xl"
            >
              <Text
                fontSize={["sm", "md", "lg", "xl"]}
                fontWeight="bold"
                color="white"
                mb={8}
              >
                Web Development
              </Text>
              <Text fontSize={["xs", "sm", "md", "lg"]} color="white">
                web development for personal branding, wedding invitations,
                operating systems, managing dashboards, etc.
              </Text>
            </Box>
            <Box
              bg="primary.500"
              h={[250]}
              w={[150, 250, 350]}
              p={4}
              borderRadius="xl"
            >
              <Text
                fontSize={["sm", "md", "lg", "xl"]}
                fontWeight="bold"
                color="white"
                mb={8}
              >
                Mobile Development
              </Text>
              <Text fontSize={["xs", "sm", "md", "lg"]} color="white">
                mobile development for managing cashier work, recording income
                and expenses, etc.
              </Text>
            </Box>
            <Box
              bg="primary.500"
              h={[250]}
              w={[150, 250, 350]}
              p={4}
              borderRadius="xl"
            >
              <Text
                fontSize={["sm", "md", "lg", "xl"]}
                fontWeight="bold"
                color="white"
                mb={8}
              >
                Video Editing
              </Text>
              <Text fontSize={["xs", "sm", "md", "lg"]} color="white">
                I am able to do basic video editing such as making After Event
                Videos, Game Highlights, etc.
              </Text>
            </Box>
          </SimpleGrid>
        </Center>
      </Box>

      <Box p={[4, 6, 8, 16]} m={[4, 6, 8, 16]}>
        <Center mb={[4, 6, 8, 16]}>
          <Text
            fontSize={["md", "lg", "xl", "2xl"]}
            fontWeight="bold"
            color="primary.500"
          >
            About Me
          </Text>
        </Center>
        <Center>
          <SimpleGrid columns={[1, 2]} spacing={12}>
            <Box m={4} p={4} align="center">
              <Image
                width={["200px", "350px"]}
                objectFit="cover"
                src={aldo_picture}
                alt="Aldo Picture"
              />
            </Box>
            <Box height="300px" m={4} p={4}>
              <Text
                fontSize={["md", "lg", "xl", "2xl"]}
                fontWeight="bold"
                mb={8}
              >
                Hi There
              </Text>
              <Text fontSize={["xs", "sm", "md", "lg"]}>
                <Text py={2}>
                  I'm Aldo Wijaya, i'm a{" "}
                  <span style={{ fontWeight: "bold", color: "#1978BC" }}>
                    Web Engineer,
                  </span>
                </Text>
                <Text py={2}>
                  I was born on February 12th, 1997. I currently live in
                  Jakarta, Indonesia.
                </Text>
                <Text py={2}>
                  I got my{" "}
                  <span style={{ fontWeight: "bold", color: "#1978BC" }}>
                    B.Sc degree in Information Technology
                  </span>{" "}
                  at President University in 2019.
                </Text>
                <Text py={2}>
                  My work is focused mostly on{" "}
                  <span style={{ fontWeight: "bold", color: "#1978BC" }}>
                    Website Development
                  </span>
                  .
                </Text>
              </Text>
            </Box>
          </SimpleGrid>
        </Center>
      </Box>

      <Box p={[4, 6, 8, 16]} m={[4, 6, 8, 16]}>
        <Center mb={[4, 6, 8, 16]}>
          <Text fontSize={["md", "lg", "xl", "2xl"]} fontWeight="bold">
            My Skills
          </Text>
        </Center>
        <Center>
          <SimpleGrid columns={[2, 4]} spacing={12} mb={8}>
            <Box bg="white" w={[150, 200, 300]} p={4}>
              <Center>
                <Icon as={FaHtml5} boxSize={12} color="primary.500" mr={2} />
                <Text
                  fontSize={["xl", "2xl", "3xl", "4xl"]}
                  color="primary.500"
                >
                  HTML
                </Text>
              </Center>
            </Box>
            <Box bg="primary.500" borderRadius="xl" w={[150, 200, 300]} p={4}>
              <Center>
                <Icon as={FaCss3} boxSize={12} color="white" mr={2} />
                <Text fontSize={["xl", "2xl", "3xl", "4xl"]} color="white">
                  CSS
                </Text>
              </Center>
            </Box>
            <Box bg="white" w={[150, 200, 300]} p={4}>
              <Center>
                <Icon as={FaJs} boxSize={12} color="primary.500" mr={2} />
                <Text
                  fontSize={["xl", "2xl", "3xl", "4xl"]}
                  color="primary.500"
                >
                  Javascript
                </Text>
              </Center>
            </Box>
            <Box bg="primary.500" borderRadius="xl" w={[150, 200, 300]} p={4}>
              <Center>
                <Icon as={FaAndroid} boxSize={12} color="white" mr={2} />
                <Text fontSize={["xl", "2xl", "3xl", "4xl"]} color="white">
                  Android
                </Text>
              </Center>
            </Box>
          </SimpleGrid>
        </Center>
        <Center>
          <SimpleGrid columns={[2, 4]} spacing={12} mb={8}>
            <Box bg="primary.500" borderRadius="xl" w={[150, 200, 300]} p={4}>
              <Center>
                <Icon as={FaReact} boxSize={12} color="white" mr={2} />
                <Text fontSize={["xl", "2xl", "3xl", "4xl"]} color="white">
                  React Js
                </Text>
              </Center>
            </Box>
            <Box bg="white" w={[150, 200, 300]} p={4}>
              <Center>
                <Icon as={FaReact} boxSize={12} color="primary.500" mr={2} />
                <Text
                  fontSize={["xl", "2xl", "3xl", "4xl"]}
                  color="primary.500"
                >
                  React Native
                </Text>
              </Center>
            </Box>
            <Box bg="primary.500" borderRadius="xl" w={[150, 200, 300]} p={4}>
              <Center>
                <Icon as={FaVuejs} boxSize={12} color="white" mr={2} />
                <Text fontSize={["xl", "2xl", "3xl", "4xl"]} color="white">
                  Vue JS
                </Text>
              </Center>
            </Box>
            <Box bg="white" w={[150, 200, 300]} p={4}>
              <Center>
                <Icon as={FaGithub} boxSize={12} color="primary.500" mr={2} />
                <Text
                  fontSize={["xl", "2xl", "3xl", "4xl"]}
                  color="primary.500"
                >
                  Github
                </Text>
              </Center>
            </Box>
          </SimpleGrid>
        </Center>
        <Center>
          <SimpleGrid columns={[2, 4]} spacing={12} mb={8}>
            <Box bg="white" w={[150, 200, 300]} p={4}>
              <Center>
                <Icon as={FaGitlab} boxSize={12} color="primary.500" mr={2} />
                <Text
                  fontSize={["xl", "2xl", "3xl", "4xl"]}
                  color="primary.500"
                >
                  Gitlab
                </Text>
              </Center>
            </Box>
            <Box bg="primary.500" borderRadius="xl" w={[150, 200, 300]} p={4}>
              <Center>
                <Icon as={FaBootstrap} boxSize={12} color="white" mr={2} />
                <Text fontSize={["xl", "2xl", "3xl", "4xl"]} color="white">
                  Bootstrap
                </Text>
              </Center>
            </Box>
            <Box bg="white" w={[150, 200, 300]} p={4}>
              <Center>
                <Icon
                  as={SiAntdesign}
                  boxSize={12}
                  color="primary.500"
                  mr={2}
                />
                <Text
                  fontSize={["xl", "2xl", "3xl", "4xl"]}
                  color="primary.500"
                >
                  Antd Design
                </Text>
              </Center>
            </Box>
            <Box bg="primary.500" borderRadius="xl" w={[150, 200, 300]} p={4}>
              <Center>
                <Icon as={SiChakraui} boxSize={12} color="white" mr={2} />
                <Text fontSize={["xl", "2xl", "3xl", "4xl"]} color="white">
                  Chakra UI
                </Text>
              </Center>
            </Box>
          </SimpleGrid>
        </Center>
        <Center>
          <SimpleGrid columns={[2, 4]} spacing={12} mb={8}>
            <Box bg="primary.500" borderRadius="xl" w={[150, 200, 300]} p={4}>
              <Center>
                <Icon
                  as={MdOutlineDesignServices}
                  boxSize={12}
                  color="white"
                  mr={2}
                />
                <Text fontSize={["xl", "2xl", "3xl", "4xl"]} color="white">
                  Fiqma
                </Text>
              </Center>
            </Box>
            <Box bg="white" w={[150, 200, 300]} p={4}>
              <Center>
                <Icon
                  as={RiSketching}
                  boxSize={12}
                  color="primary.500"
                  mr={2}
                />
                <Text
                  fontSize={["xl", "2xl", "3xl", "4xl"]}
                  color="primary.500"
                >
                  Balsamiq
                </Text>
              </Center>
            </Box>
            <Box bg="primary.500" borderRadius="xl" w={[150, 200, 300]} p={4}>
              <Center>
                <Icon
                  as={SiAdobeillustrator}
                  boxSize={12}
                  color="white"
                  mr={2}
                />
                <Text fontSize={["xl", "2xl", "3xl", "4xl"]} color="white">
                  Illustrator
                </Text>
              </Center>
            </Box>
            <Box bg="white" w={[150, 200, 300]} p={4}>
              <Center>
                <Icon
                  as={SiAdobephotoshop}
                  boxSize={12}
                  color="primary.500"
                  mr={2}
                />
                <Text
                  fontSize={["xl", "2xl", "3xl", "4xl"]}
                  color="primary.500"
                >
                  Photoshop
                </Text>
              </Center>
            </Box>
          </SimpleGrid>
        </Center>
      </Box>

      <Box p={[4, 6, 8, 16]} m={[4, 6, 8, 16]}>
        <Center mb={8}>
          <Text
            fontSize={["md", "lg", "xl", "2xl"]}
            fontWeight="bold"
            color="primary.500"
          >
            Portfolio
          </Text>
        </Center>
        <Center>
          <Tabs variant="soft-rounded" colorScheme="primary" align="center">
            <TabList>
              <Tab mx={2}>All Works</Tab>
              {/* <Hide below="md">
                <Tab mx={2}>Website</Tab>
                <Tab mx={2}>Mobile</Tab>
                <Tab mx={2}>Design</Tab>
                <Tab mx={2}>Video</Tab>
              </Hide> */}
            </TabList>
            <TabPanels>
              <TabPanel>
                <HStack p={2}>
                  <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
                </HStack>
                <HStack p={2}>
                  <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
                </HStack>
              </TabPanel>
              <TabPanel>
                <HStack p={2}>
                  <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
                </HStack>
              </TabPanel>
              <TabPanel>
                <HStack p={2}>
                  <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
                </HStack>
              </TabPanel>
              <TabPanel>
                <HStack p={2}>
                  <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
                </HStack>
              </TabPanel>
              <TabPanel>
                <HStack p={2}>
                  <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
                </HStack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Center>
      </Box>

      <Box p={[4, 6, 8, 16]} bg="#1978BC">
        <Center mb={4}>
          <Text
            fontSize={["md", "lg", "xl", "2xl"]}
            fontWeight="bold"
            color="white"
          >
            Contact Me
          </Text>
        </Center>
        <Center mb={2}>
          <Text fontSize={["sm", "md", "lg", "xl"]} color="white">
            <Link href="https://linkedin.com/in/aldo-wijaya" isExternal>
              <Icon as={SiLinkedin} boxSize={4} mr={2} />
              linkedin.com/in/aldo-wijaya
            </Link>
          </Text>
        </Center>
        <Center>
          <Text fontSize={["sm", "md", "lg", "xl"]} color="white">
            <Link href="mailto:aldowjy12@gmail.com" isExternal>
              <Icon as={SiGmail} boxSize={4} mr={2} />
              aldowjy12@gmail.com
            </Link>
          </Text>
        </Center>
      </Box>
    </div>
  );
}

export default App;
