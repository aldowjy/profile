import "./App.css";
import {
  Box,
  Heading,
  Text,
  Center,
  SimpleGrid,
  Stack,
  Button,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";

function App() {
  return (
    <div className="App">
      <Box bg="tomato" w="100%" p={4} color="white">
        <Heading as="h4" size="md">
          dovin • Home • Services • About • Skills • Portfolio • Contact
        </Heading>
      </Box>
      <Box p={16} bg="tomato">
        <Heading as="h3" size="lg" mb={2}>
          Hello.
        </Heading>
        <Heading as="h2" size="3xl" mb={2}>
          I am Aldo Wijaya
        </Heading>
        <Heading as="h4" size="md" mb={8}>
          i'm Aldo, professional web developer, mobile developer, and a gamer.
        </Heading>
        <PhoneIcon />
        <PhoneIcon />
        <PhoneIcon />
        <PhoneIcon />
        <PhoneIcon />
      </Box>

      <Box padding={16} bg="gray">
        <Center mb={2}>
          <Text fontSize="lg">SERVICES</Text>
        </Center>
        <Center mb={2}>
          <Text fontSize="xl">My Services</Text>
        </Center>
        <Center mb={8}>
          <Text fontSize="md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Center>
        <Center>
          <SimpleGrid columns={3} spacing={10}>
            <Box bg="tomato" height="200px" width="200px" m={4} p={4}>
              a
            </Box>
            <Box bg="tomato" height="200px" width="200px" m={4} p={4}>
              b
            </Box>
            <Box bg="tomato" height="200px" width="200px" m={4} p={4}>
              c
            </Box>
          </SimpleGrid>
        </Center>
        <Center>
          <SimpleGrid columns={3} spacing={10}>
            <Box bg="tomato" height="200px" width="200px" m={4} p={4}>
              d
            </Box>
            <Box bg="tomato" height="200px" width="200px" m={4} p={4}>
              e
            </Box>
            <Box bg="tomato" height="200px" width="200px" m={4} p={4}>
              f
            </Box>
          </SimpleGrid>
        </Center>
      </Box>

      <Box padding={16} bg="tomato">
        <Center mb={2}>
          <Text fontSize="xl">About Me</Text>
        </Center>
        <Center mb={8}>
          <Text fontSize="md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Center>
        <Center>
          <SimpleGrid columns={2} spacing={10}>
            <Box bg="gray" height="200px" m={4} p={4}>
              a
            </Box>
            <Box bg="gray" height="250px" m={4} p={4}>
              <Text fontSize="xl">Hi There</Text>
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

      <Box padding={16} bg="gray">
        <Center mb={2}>
          <Text fontSize="xl">My Skills</Text>
        </Center>
        <Center mb={8}>
          <Text fontSize="md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Center>
        <Center>
          <SimpleGrid columns={4} spacing={10}>
            <Box bg="tomato" height="200px" width="300px" p={4}>
              a
            </Box>
            <Box bg="white" height="200px" width="300px" p={4}>
              b
            </Box>
            <Box bg="tomato" height="200px" width="300px" p={4}>
              c
            </Box>
            <Box bg="white" height="200px" width="300px" p={4}>
              d
            </Box>
          </SimpleGrid>
        </Center>
        <Center>
          <SimpleGrid columns={4} spacing={10}>
            <Box bg="white" height="200px" width="300px" p={4}>
              a
            </Box>
            <Box bg="tomato" height="200px" width="300px" p={4}>
              b
            </Box>
            <Box bg="white" height="200px" width="300px" p={4}>
              c
            </Box>
            <Box bg="tomato" height="200px" width="300px" p={4}>
              d
            </Box>
          </SimpleGrid>
        </Center>
      </Box>

      <Box padding={16} bg="tomato">
        <Center mb={2}>
          <Text fontSize="xl">Portfolio</Text>
        </Center>
        <Center mb={8}>
          <Text fontSize="md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Center>
        <Center>
          <Stack spacing={4} direction="row" align="center" mb={8}>
            <Button colorScheme="teal" size="md">
              All Works
            </Button>
            <Button colorScheme="teal" size="md">
              Website
            </Button>
            <Button colorScheme="teal" size="md">
              Mobile
            </Button>
            <Button colorScheme="teal" size="md">
              Design
            </Button>
            <Button colorScheme="teal" size="md">
              Video
            </Button>
          </Stack>
        </Center>
        <Center>
          <SimpleGrid columns={4} spacing={10}>
            <Box bg="blue" height="200px" width="300px" p={4}>
              a
            </Box>
            <Box bg="white" height="200px" width="300px" p={4}>
              b
            </Box>
            <Box bg="blue" height="200px" width="300px" p={4}>
              c
            </Box>
            <Box bg="white" height="200px" width="300px" p={4}>
              d
            </Box>
          </SimpleGrid>
        </Center>
        <Center>
          <SimpleGrid columns={4} spacing={10}>
            <Box bg="white" height="200px" width="300px" p={4}>
              a
            </Box>
            <Box bg="blue" height="200px" width="300px" p={4}>
              b
            </Box>
            <Box bg="white" height="200px" width="300px" p={4}>
              c
            </Box>
            <Box bg="blue" height="200px" width="300px" p={4}>
              d
            </Box>
          </SimpleGrid>
        </Center>
      </Box>

      <Box padding={16} bg="gray">
        <Center mb={2}>
          <Text fontSize="xl">Portfolio</Text>
        </Center>
        <Center mb={8}>
          <Text fontSize="md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Center>
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
