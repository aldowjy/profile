import { Icon } from "@chakra-ui/icons";
import {
  SiLinkedin,
  SiGmail,
  SiAntdesign,
  SiChakraui,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiNotion,
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
  FaFigma,
  FaJira,
  FaGooglePlay,
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
  Avatar,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import {
  abc_sample_1,
  abc_sample_2,
  abc_sample_3,
  aldo_picture,
  awlogo,
  lajual_sample_1,
  mana_sample_1,
  mana_sample_2,
  mana_sample_3,
} from "../src/assets/images";

function App() {
  return (
    <div className="App">
      <Container maxW="container.xl">
        <Flex>
          <HStack p={4}>
            <Link href="/">
              <Image width="30px" src={awlogo} alt="Aldo Wijaya" />
            </Link>
          </HStack>
          <Spacer />
          <HStack p={4} spacing={12}>
            <Hide above="md">
              <Link href="/">
                <Button variant="ghost" size={["xs", "sm"]} p={2}>
                  Home
                </Button>
              </Link>
            </Hide>
            <Hide below="md">
              <Link href="#services">
                <Button variant="ghost" size={["xs", "sm"]} p={2}>
                  Services
                </Button>
              </Link>
              <Link href="#about">
                <Button variant="ghost" size={["xs", "sm"]} p={2}>
                  About
                </Button>
              </Link>
              <Link href="#skills">
                <Button variant="ghost" size={["xs", "sm"]} p={2}>
                  Skills
                </Button>
              </Link>
              <Link href="#portfolio">
                <Button variant="ghost" size={["xs", "sm"]} p={2}>
                  Portfolio
                </Button>
              </Link>
              <Link href="#contact">
                <Button variant="ghost" size={["xs", "sm"]} p={2}>
                  Contact
                </Button>
              </Link>
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
            fontSize={["md", "lg", "xl", "2xl"]}
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
            professional web engineer, freelancer and a gamer.
          </Heading>
          <Link href="#portfolio">
            <Button variant="solid">My Portfolio</Button>
          </Link>
        </Box>
      </Box>

      <Box id="services" p={[4, 6, 8, 16]} m={[4, 6, 8, 16]}>
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
                web development for personal branding, company profile, mini
                project , managing dashboards, etc.
              </Text>
              {/* wedding invitations, operating systems */}
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
                I am able to do simple video editing such as making After Event
                Videos, Game Highlights, etc.
              </Text>
            </Box>
          </SimpleGrid>
        </Center>
      </Box>

      <Box id="about" p={[4, 6, 8, 16]} m={[4, 6, 8, 16]}>
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
                    Frontend Engineer,
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
                    developing, maintaining, improving, and optimizing a website
                  </span>
                  .
                </Text>
              </Text>
            </Box>
          </SimpleGrid>
        </Center>
      </Box>

      <Box id="skills" p={[4, 6, 8, 16]} m={[4, 6, 8, 16]}>
        <Center mb={[4, 6, 8, 16]}>
          <Text
            fontSize={["md", "lg", "xl", "2xl"]}
            fontWeight="bold"
            color="primary.500"
          >
            My Skills
          </Text>
        </Center>
        <Center>
          <SimpleGrid columns={[2, 4]} spacing={12} mb={8}>
            <Box bg="white" w={[150, 200, 250]} p={4}>
              <Center>
                <Icon
                  as={FaHtml5}
                  boxSize={[8, 12]}
                  color="primary.500"
                  mr={2}
                />
                <Text fontSize={["md", "lg", "xl", "2xl"]} color="primary.500">
                  HTML
                </Text>
              </Center>
            </Box>
            <Box bg="primary.500" borderRadius="xl" w={[150, 200, 250]} p={4}>
              <Center>
                <Icon as={FaCss3} boxSize={[8, 12]} color="white" mr={2} />
                <Text fontSize={["md", "lg", "xl", "2xl"]} color="white">
                  CSS
                </Text>
              </Center>
            </Box>
            <Box bg="white" w={[150, 200, 250]} p={4}>
              <Center>
                <Icon as={FaJs} boxSize={[8, 12]} color="primary.500" mr={2} />
                <Text fontSize={["md", "lg", "xl", "2xl"]} color="primary.500">
                  Javascript
                </Text>
              </Center>
            </Box>
            <Box bg="primary.500" borderRadius="xl" w={[150, 200, 250]} p={4}>
              <Center>
                <Icon as={FaAndroid} boxSize={[8, 12]} color="white" mr={2} />
                <Text fontSize={["md", "lg", "xl", "2xl"]} color="white">
                  Android
                </Text>
              </Center>
            </Box>
          </SimpleGrid>
        </Center>
        <Center>
          <SimpleGrid columns={[2, 4]} spacing={12} mb={8}>
            <Box bg="primary.500" borderRadius="xl" w={[150, 200, 250]} p={4}>
              <Center>
                <Icon as={FaReact} boxSize={[8, 12]} color="white" mr={2} />
                <Text fontSize={["md", "lg", "xl", "2xl"]} color="white">
                  React Js
                </Text>
              </Center>
            </Box>
            <Box bg="white" w={[150, 200, 250]} p={4}>
              <Center>
                <Icon
                  as={FaReact}
                  boxSize={[8, 12]}
                  color="primary.500"
                  mr={2}
                />
                <Text fontSize={["md", "lg", "xl", "2xl"]} color="primary.500">
                  React Native
                </Text>
              </Center>
            </Box>
            <Box bg="primary.500" borderRadius="xl" w={[150, 200, 250]} p={4}>
              <Center>
                <Icon as={FaVuejs} boxSize={[8, 12]} color="white" mr={2} />
                <Text fontSize={["md", "lg", "xl", "2xl"]} color="white">
                  Vue JS
                </Text>
              </Center>
            </Box>
            <Box bg="white" w={[150, 200, 250]} p={4}>
              <Center>
                <Icon
                  as={FaGithub}
                  boxSize={[8, 12]}
                  color="primary.500"
                  mr={2}
                />
                <Text fontSize={["md", "lg", "xl", "2xl"]} color="primary.500">
                  Github
                </Text>
              </Center>
            </Box>
          </SimpleGrid>
        </Center>
        <Center>
          <SimpleGrid columns={[2, 4]} spacing={12} mb={8}>
            <Box bg="white" w={[150, 200, 250]} p={4}>
              <Center>
                <Icon
                  as={FaGitlab}
                  boxSize={[8, 12]}
                  color="primary.500"
                  mr={2}
                />
                <Text fontSize={["md", "lg", "xl", "2xl"]} color="primary.500">
                  Gitlab
                </Text>
              </Center>
            </Box>
            <Box bg="primary.500" borderRadius="xl" w={[150, 200, 250]} p={4}>
              <Center>
                <Icon as={FaBootstrap} boxSize={[8, 12]} color="white" mr={2} />
                <Text fontSize={["md", "lg", "xl", "2xl"]} color="white">
                  Bootstrap
                </Text>
              </Center>
            </Box>
            <Box bg="white" w={[150, 200, 250]} p={4}>
              <Center>
                <Icon
                  as={SiAntdesign}
                  boxSize={[8, 12]}
                  color="primary.500"
                  mr={2}
                />
                <Text fontSize={["md", "lg", "xl", "2xl"]} color="primary.500">
                  Antd Design
                </Text>
              </Center>
            </Box>
            <Box bg="primary.500" borderRadius="xl" w={[150, 200, 250]} p={4}>
              <Center>
                <Icon as={SiChakraui} boxSize={[8, 12]} color="white" mr={2} />
                <Text fontSize={["md", "lg", "xl", "2xl"]} color="white">
                  Chakra UI
                </Text>
              </Center>
            </Box>
          </SimpleGrid>
        </Center>
        <Center>
          <SimpleGrid columns={[2, 4]} spacing={12} mb={8}>
            <Box bg="primary.500" borderRadius="xl" w={[150, 200, 250]} p={4}>
              <Center>
                <Icon as={FaFigma} boxSize={[8, 12]} color="white" mr={2} />
                <Text fontSize={["md", "lg", "xl", "2xl"]} color="white">
                  Figma
                </Text>
              </Center>
            </Box>
            <Box bg="white" w={[150, 200, 250]} p={4}>
              <Center>
                <Icon
                  as={RiSketching}
                  boxSize={[8, 12]}
                  color="primary.500"
                  mr={2}
                />
                <Text fontSize={["md", "lg", "xl", "2xl"]} color="primary.500">
                  Balsamiq
                </Text>
              </Center>
            </Box>
            <Box bg="primary.500" borderRadius="xl" w={[150, 200, 250]} p={4}>
              <Center>
                <Icon
                  as={SiAdobeillustrator}
                  boxSize={[8, 12]}
                  color="white"
                  mr={2}
                />
                <Text fontSize={["md", "lg", "xl", "2xl"]} color="white">
                  Illustrator
                </Text>
              </Center>
            </Box>
            <Box bg="white" w={[150, 200, 250]} p={4}>
              <Center>
                <Icon
                  as={SiAdobephotoshop}
                  boxSize={[8, 12]}
                  color="primary.500"
                  mr={2}
                />
                <Text
                  fontSize={["md", "lg", "xl", "3xl"]}
                  color="primary.500"
                ></Text>
              </Center>
            </Box>
          </SimpleGrid>
        </Center>
        <Center>
          <SimpleGrid columns={[2, 4]} spacing={12} mb={8}>
            <Box bg="white" w={[150, 200, 250]} p={4}>
              <Center>
                <Icon
                  as={FaJira}
                  boxSize={[8, 12]}
                  color="primary.500"
                  mr={2}
                />
                <Text fontSize={["md", "lg", "xl", "2xl"]} color="primary.500">
                  JIRA
                </Text>
              </Center>
            </Box>
            <Box bg="primary.500" borderRadius="xl" w={[150, 200, 250]} p={4}>
              <Center>
                <Icon as={SiNotion} boxSize={[8, 12]} color="white" mr={2} />
                <Text fontSize={["md", "lg", "xl", "2xl"]} color="white">
                  Notion
                </Text>
              </Center>
            </Box>
            <Box bg="white" w={[150, 200, 250]} p={4}>
              <Center>
                <Icon
                  as={FaGooglePlay}
                  boxSize={[8, 12]}
                  color="primary.500"
                  mr={2}
                />
                <Text fontSize={["md", "lg", "xl", "2xl"]} color="primary.500">
                  Play Store
                </Text>
              </Center>
            </Box>
          </SimpleGrid>
        </Center>
      </Box>

      <Box id="portfolio" p={[4, 6, 8, 16]} m={[4, 6, 8, 16]}>
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
                <Tab mx={2}>Websites</Tab>
                <Tab mx={2}>Website</Tab>
                <Tab mx={2}>Mobile</Tab>
                <Tab mx={2}>Design</Tab>
                <Tab mx={2}>Video</Tab>
              </Hide> */}
            </TabList>
            <TabPanels>
              <TabPanel>
                <HStack p={2}>
                  <Accordion
                    width={["300px", "1200px"]}
                    defaultIndex={[0]}
                    allowToggle
                  >
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box as="span" textAlign="left">
                            Lajual
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <SimpleGrid columns={[1, 2]} spacing={12}>
                          <Box m={4} p={4}>
                            <Text
                              fontSize={["xs", "sm", "md", "lg"]}
                              align="left"
                            >
                              <Text py={2}>
                                Web and android development project to help
                                users to manage product, user data, create
                                dashboard, calculate cash income and expense,
                                and make digital report data. and my
                                responsibility is to handle the User Interface
                                and Data Flow.
                              </Text>

                              <Link
                                href="https://lajual.com"
                                pt={16}
                                fontWeight="bold"
                                color="primary.500"
                                isExternal
                              >
                                lajual.com
                              </Link>
                            </Text>
                          </Box>
                          <Box m={4} p={4} align="center">
                            <Image
                              width="500px"
                              objectFit="cover"
                              src={lajual_sample_1}
                              alt="lajual-sample-1"
                            />
                          </Box>
                        </SimpleGrid>
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box as="span" textAlign="left">
                            MANA Clan ID
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <SimpleGrid columns={[1, 2]} spacing={12}>
                          <Box m={4} p={4}>
                            <Text
                              fontSize={["xs", "sm", "md", "lg"]}
                              align="left"
                            >
                              <Text py={2}>
                                Website development to display a database of
                                items, monsters, equips etc.
                              </Text>

                              <Link
                                href="https://mana-clan.com/"
                                pt={16}
                                fontWeight="bold"
                                color="primary.500"
                                isExternal
                              >
                                mana-clan.com
                              </Link>
                            </Text>
                          </Box>
                          <Box m={4} p={4} align="center">
                            <Image
                              width="500px"
                              objectFit="cover"
                              src={mana_sample_1}
                              alt="mana-sample-1"
                            />
                          </Box>
                        </SimpleGrid>
                        <SimpleGrid columns={[1, 2]} spacing={12}>
                          <Box m={4} p={4}>
                            <Image
                              width="500px"
                              objectFit="cover"
                              src={mana_sample_2}
                              alt="mana-sample-2"
                            />
                          </Box>
                          <Box m={4} p={4}>
                            <Image
                              width="500px"
                              objectFit="cover"
                              src={mana_sample_3}
                              alt="mana-sample-3"
                            />
                          </Box>
                        </SimpleGrid>
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box as="span" textAlign="left">
                            ABC Exhibition 2022
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <SimpleGrid columns={[1, 2]} spacing={12}>
                          <Box m={4} p={4}>
                            <Text
                              fontSize={["xs", "sm", "md", "lg"]}
                              align="left"
                            >
                              <Text py={2}>
                                Website development to display a clothing and
                                model exhibition held by one of the campuses in
                                South Korea.
                              </Text>
                            </Text>
                          </Box>
                          <Box m={4} p={4}>
                            <Image
                              width="500px"
                              objectFit="cover"
                              src={abc_sample_1}
                              alt="abc-sample-1"
                            />
                          </Box>
                        </SimpleGrid>
                        <SimpleGrid columns={[1, 2]} spacing={12}>
                          <Box m={4} p={4}>
                            <Image
                              width="500px"
                              objectFit="cover"
                              src={abc_sample_2}
                              alt="abc-sample-3"
                            />
                          </Box>
                          <Box m={4} p={4}>
                            <Image
                              width="500px"
                              objectFit="cover"
                              src={abc_sample_3}
                              alt="abc-sample-3"
                            />
                          </Box>
                        </SimpleGrid>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
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

      <Box id="contact" p={[4, 6, 8, 16]} bg="#1978BC">
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
