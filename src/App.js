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
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";

function App() {
  return (
    <div className="App" bg="#1f2235">
      <Container maxW="container.xl" bg="#1f2235">
        <Flex>
          <Text p={4} color="white" style={{ fontWeight: "bold" }}>
            dovin
          </Text>
          <Spacer />
          <HStack p={4} spacing="24px">
            <Text color="white" style={{ fontWeight: "bold" }}>
              Home
            </Text>
            <Text color="white" style={{ fontWeight: "bold" }}>
              Services
            </Text>
            <Text color="white" style={{ fontWeight: "bold" }}>
              About
            </Text>
            <Text color="white" style={{ fontWeight: "bold" }}>
              Skills
            </Text>
            <Text color="white" style={{ fontWeight: "bold" }}>
              Portfolio
            </Text>
            <Text color="white" style={{ fontWeight: "bold" }}>
              Contact
            </Text>
          </HStack>
        </Flex>
      </Container>

      <Box p={16} bg="#23263a">
        <Box m={16} p={16}>
          <Heading as="h3" size="lg" mb={2} color="#ff4a56">
            Hello
          </Heading>
          <Heading as="h2" size="3xl" mb={2}>
            I am Aldo Wijaya
          </Heading>
          <Heading as="h4" size="md" mb={8}>
            i'm Aldo, professional web developer, mobile developer, and a gamer.
          </Heading>

          {/* <PhoneIcon />
          <PhoneIcon />
          <PhoneIcon />
          <PhoneIcon />
          <PhoneIcon /> */}
        </Box>
      </Box>

      <Box p={16}>
        <Center mb={2}>
          <Text fontSize="lg" color="#ff4a56">
            SERVICES
          </Text>
        </Center>
        <Center mb={2}>
          <Text fontSize="xl" style={{ fontWeight: "bold" }}>
            My Services
          </Text>
        </Center>
        <Center mb={16}>
          <Text fontSize="md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Center>
        <Center>
          <SimpleGrid columns={3} spacing={10} mb={8}>
            <Box bg="#ff4a56" height="200px" width="350px" p={4}>
              <Text fontSize="lg" style={{ fontWeight: "bold" }} mb={8}>
                Web Development
              </Text>
              <Text fontSize="md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </Box>
            <Box bg="#ff4a56" height="200px" width="350px" p={4}>
              <Text fontSize="lg" style={{ fontWeight: "bold" }} mb={8}>
                Mobile Development
              </Text>
              <Text fontSize="md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </Box>
            <Box bg="#ff4a56" height="200px" width="350px" p={4}>
              <Text fontSize="lg" style={{ fontWeight: "bold" }} mb={8}>
                Video Editing
              </Text>
              <Text fontSize="md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </Box>
          </SimpleGrid>
        </Center>
        <Center>
          <SimpleGrid columns={2} spacing={10}>
            <Box bg="#ff4a56" height="200px" width="350px" p={4}>
              <Text fontSize="lg" style={{ fontWeight: "bold" }} mb={8}>
                Game Streamer
              </Text>
              <Text fontSize="md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </Box>
            <Box bg="#ff4a56" height="200px" width="350px" p={4}>
              <Text fontSize="lg" style={{ fontWeight: "bold" }} mb={8}>
                Gamer as Hobby
              </Text>
              <Text fontSize="md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </Box>
          </SimpleGrid>
        </Center>
      </Box>

      <Box p={16} bg="#23263a">
        <Center mb={16}>
          <Text fontSize="xl" style={{ fontWeight: "bold" }}>
            About Me
          </Text>
        </Center>
        <Center>
          <SimpleGrid columns={2} spacing={10}>
            <Box height="300px" m={4} p={4}>
              <Flex dir="row">
                <Spacer />
                <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
              </Flex>
            </Box>
            <Box height="300px" m={4} p={4}>
              <Text
                fontSize="xl"
                color="#ff4a56"
                style={{ fontWeight: "bold" }}
                mb={8}
              >
                Hi There
              </Text>
              <Text fontSize="md">
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

      <Box p={16}>
        <Center mb={2}>
          <Text fontSize="xl" style={{ fontWeight: "bold" }}>
            My Skills
          </Text>
        </Center>
        <Center mb={16}>
          <Text fontSize="md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Center>
        <Center>
          <SimpleGrid columns={4} spacing={10} mb={8}>
            <Box bg="#ff4a56" height="200px" width="300px" p={4}>
              <Center>
                <Text fontSize="4xl">React JS</Text>
              </Center>
            </Box>
            <Box bg="gray" height="200px" width="300px" p={4}>
              <Center>
                <Text fontSize="4xl">Vue</Text>
              </Center>
            </Box>
            <Box bg="#ff4a56" height="200px" width="300px" p={4}>
              <Center>
                <Text fontSize="4xl">Android</Text>
              </Center>
            </Box>
            <Box bg="gray" height="200px" width="300px" p={4}>
              <Center>
                <Text fontSize="4xl">Premiere</Text>
              </Center>
            </Box>
          </SimpleGrid>
        </Center>
        <Center>
          <SimpleGrid columns={3} spacing={10}>
            <Box bg="gray" height="200px" width="300px" p={4}>
              <Center>
                <Text fontSize="4xl">HTML</Text>
              </Center>
            </Box>
            <Box bg="#ff4a56" height="200px" width="300px" p={4}>
              <Center>
                <Text fontSize="4xl">CSS</Text>
              </Center>
            </Box>
            <Box bg="gray" height="200px" width="300px" p={4}>
              <Center>
                <Text fontSize="4xl">Javascript</Text>
              </Center>
            </Box>
          </SimpleGrid>
        </Center>
      </Box>

      <Box p={16} bg="#23263a">
        <Center mb={8}>
          <Text fontSize="xl" style={{ fontWeight: "bold" }}>
            Portfolio
          </Text>
        </Center>
        <Center>
          <Stack spacing={4} direction="row" align="center" mb={16}>
            <Button color="#ff4a56" size="md">
              All Works
            </Button>
            <Button color="#ff4a56" size="md">
              Website
            </Button>
            <Button color="#ff4a56" size="md">
              Mobile
            </Button>
            <Button color="#ff4a56" size="md">
              Design
            </Button>
            <Button color="#ff4a56" size="md">
              Video
            </Button>
          </Stack>
        </Center>
      </Box>

      <Box p={16}>
        <Box p={16}>
          <Center mb={2}>
            <Text fontSize="xl" style={{ fontWeight: "bold" }}>
              Contact Me
            </Text>
          </Center>
          <Center mb={8}>
            <Text fontSize="md" color="#ff4a56">
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
