import "./App.css";
import {
  Box,
  Heading,
  Text,
  Center,
  SimpleGrid,
  Stack,
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
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";

function App() {
  return (
    <div className="App" bg="default.500">
      <Container maxW="container.xl" bg="default.500">
        <Flex>
          <Text p={4} color="primary.500" style={{ fontWeight: "bold" }}>
            dovin
          </Text>
          <Spacer />
          <HStack p={4} spacing={10}>
            <Button variant="ghost" size={["xs", "sm"]}>
              Home
            </Button>
            <Hide below="md">
              <Button variant="ghost" size={["xs", "sm"]}>
                Services
              </Button>
              <Button variant="ghost" size={["xs", "sm"]}>
                About
              </Button>
              <Button variant="ghost" size={["xs", "sm"]}>
                Skills
              </Button>
              <Button variant="ghost" size={["xs", "sm"]}>
                Portfolio
              </Button>
              <Button variant="ghost" size={["xs", "sm"]}>
                Contact
              </Button>
            </Hide>
          </HStack>
        </Flex>
      </Container>

      <Box p={[4, 6, 8, 16]} bg="#23263a">
        <Box m={[4, 6, 8, 16]} p={[4, 6, 8, 16]}>
          <Heading
            as="h2"
            size="xl"
            mb={2}
            color="primary.500"
            fontSize={["sm", "md", "lg", "xl"]}
          >
            Hello
          </Heading>
          <Heading
            as="h1"
            size="4xl"
            mb={2}
            fontSize={["xl", "2xl", "3xl", "4xl"]}
          >
            I am Aldo Wijaya
          </Heading>
          <Heading
            as="h3"
            size="lg"
            mb={[4, 6, 8, 16]}
            fontSize={["xs", "sm", "md", "lg"]}
          >
            professional web and mobile developer, freelance and a gamer.
          </Heading>
          <Button variant="outline">My Portfolio</Button>
          {/* <PhoneIcon />
          <PhoneIcon />
          <PhoneIcon />
          <PhoneIcon />
          <PhoneIcon /> */}
        </Box>
      </Box>

      <Box p={[4, 6, 8, 16]}>
        <Center mb={2}>
          <Text fontSize={["sm", "md", "lg", "xl"]} color="primary.500">
            SERVICES
          </Text>
        </Center>
        <Center mb={2}>
          <Text
            fontSize={["md", "lg", "xl", "2xl"]}
            style={{ fontWeight: "bold" }}
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
          <SimpleGrid columns={[2, 3, 4]} spacing={10} mb={8}>
            <Box bg="primary.500" h={[250]} w={[150, 250, 350]} p={4}>
              <Text
                fontSize={["sm", "md", "lg", "xl"]}
                style={{ fontWeight: "bold" }}
                mb={8}
              >
                Web Development
              </Text>
              <Text fontSize={["xs", "sm", "md", "lg"]}>
                web development for personal branding, wedding invitations,
                operating systems, managing dashboards, etc.
              </Text>
            </Box>
            <Box bg="primary.500" h={[250]} w={[150, 250, 350]} p={4}>
              <Text
                fontSize={["sm", "md", "lg", "xl"]}
                style={{ fontWeight: "bold" }}
                mb={8}
              >
                Mobile Development
              </Text>
              <Text fontSize={["xs", "sm", "md", "lg"]}>
                mobile development for managing cashier work, recording income
                and expenses, etc.
              </Text>
            </Box>
            <Box bg="primary.500" h={[250]} w={[150, 250, 350]} p={4}>
              <Text
                fontSize={["sm", "md", "lg", "xl"]}
                style={{ fontWeight: "bold" }}
                mb={8}
              >
                Video Editing
              </Text>
              <Text fontSize={["xs", "sm", "md", "lg"]}>
                I am able to do basic video editing such as making After Event
                Videos, Game Highlights, etc.
              </Text>
            </Box>
            <Box bg="primary.500" h={[250]} w={[150, 250, 350]} p={4}>
              <Text
                fontSize={["sm", "md", "lg", "xl"]}
                style={{ fontWeight: "bold" }}
                mb={8}
              >
                Game Streamer
              </Text>
              <Text fontSize={["xs", "sm", "md", "lg"]}>
                besides being a developer, on the other hand I have a hobby of
                playing online games
              </Text>
            </Box>
          </SimpleGrid>
        </Center>
      </Box>

      <Box p={[4, 6, 8, 16]} bg="#23263a">
        <Center mb={[4, 6, 8, 16]}>
          <Text
            fontSize={["md", "lg", "xl", "2xl"]}
            style={{ fontWeight: "bold" }}
          >
            About Me
          </Text>
        </Center>
        <Center>
          <SimpleGrid columns={[1, 2]} spacing={10}>
            <Box height="300px" m={4} p={4}>
              <Flex dir="row">
                <Spacer />
                <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
              </Flex>
            </Box>
            <Box height="300px" m={4} p={4}>
              <Text
                fontSize={["md", "lg", "xl", "2xl"]}
                color="primary.500"
                style={{ fontWeight: "bold" }}
                mb={8}
              >
                Hi There
              </Text>
              <Text fontSize={["xs", "sm", "md", "lg"]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
            </Box>
          </SimpleGrid>
        </Center>
      </Box>

      <Box p={[4, 6, 8, 16]}>
        <Center mb={2}>
          <Text
            fontSize={["md", "lg", "xl", "2xl"]}
            style={{ fontWeight: "bold" }}
          >
            My Skills
          </Text>
        </Center>
        <Center mb={[4, 6, 8, 16]}>
          <Text fontSize={["xs", "sm", "md", "lg"]} align={["center"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Center>
        <Center>
          <SimpleGrid columns={[2, 3, 4]} spacing={10} mb={8}>
            <Box bg="primary.500" h={[100, 150, 200]} w={[150, 200, 300]} p={4}>
              <Center>
                <Text fontSize={["xl", "2xl", "3xl", "4xl"]}>React JS</Text>
              </Center>
            </Box>
            <Box bg="gray" h={[100, 150, 200]} w={[150, 200, 300]} p={4}>
              <Center>
                <Text fontSize={["xl", "2xl", "3xl", "4xl"]}>Vue</Text>
              </Center>
            </Box>
            <Box bg="primary.500" h={[100, 150, 200]} w={[150, 200, 300]} p={4}>
              <Center>
                <Text fontSize={["xl", "2xl", "3xl", "4xl"]}>Android</Text>
              </Center>
            </Box>
            <Box bg="gray" h={[100, 150, 200]} w={[150, 200, 300]} p={4}>
              <Center>
                <Text fontSize={["xl", "2xl", "3xl", "4xl"]}>Premiere</Text>
              </Center>
            </Box>
          </SimpleGrid>
        </Center>
        <Center>
          <SimpleGrid columns={[2, 4]} spacing={10}>
            <Box bg="gray" h={[100, 150, 200]} w={[150, 200, 300]} p={4}>
              <Center>
                <Text fontSize={["xl", "2xl", "3xl", "4xl"]}>HTML</Text>
              </Center>
            </Box>
            <Box bg="primary.500" h={[100, 150, 200]} w={[150, 200, 300]} p={4}>
              <Center>
                <Text fontSize={["xl", "2xl", "3xl", "4xl"]}>CSS</Text>
              </Center>
            </Box>
            <Box bg="gray" h={[100, 150, 200]} w={[150, 200, 300]} p={4}>
              <Center>
                <Text fontSize={["xl", "2xl", "3xl", "4xl"]}>Javascript</Text>
              </Center>
            </Box>
          </SimpleGrid>
        </Center>
      </Box>

      <Box p={[4, 6, 8, 16]} bg="#23263a">
        <Center mb={8}>
          <Text
            fontSize={["md", "lg", "xl", "2xl"]}
            style={{ fontWeight: "bold" }}
          >
            Portfolio
          </Text>
        </Center>
        <Center>
          <Tabs variant="soft-rounded" colorScheme="primary" align="center">
            <TabList>
              <Tab mx={2}>All Works</Tab>
              <Hide below="md">
                <Tab mx={2}>Website</Tab>
                <Tab mx={2}>Mobile</Tab>
                <Tab mx={2}>Design</Tab>
                <Tab mx={2}>Video</Tab>
              </Hide>
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

      <Box p={[4, 6, 8, 16]}>
        <Box p={[4, 6, 8, 16]}>
          <Center mb={2}>
            <Text
              fontSize={["md", "lg", "xl", "2xl"]}
              style={{ fontWeight: "bold" }}
            >
              Contact Me
            </Text>
          </Center>
          <Center mb={8}>
            <Text
              fontSize={["xs", "sm", "md", "lg"]}
              color="primary.500"
              align={["center"]}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </Center>
        </Box>
      </Box>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
