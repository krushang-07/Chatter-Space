import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import "../i.css";
function Homepage() {
  const history = useHistory();

  // useEffect(() => {
  //   const { user } = JSON.parse(localStorage.getItem("userInfo"));

  //   if (user) { history.push("/chats"); }
  // }, [history]);
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      const { user } = JSON.parse(userInfo);
      if (user) {
        history.push("/chats");
      }
    }
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text
          fontSize="4xl"
          fontFamily="Work sans"
          fontWeight="bolder"
          align="center"
          font-family="Poetsen One sans-serif"
          font-weight="400"
          font-style="normal"
        >
          Chatter-Space
        </Text>
        <marquee direction="right">
          <Text align="center">
            whatsapp banane ka tareeka thoda kazual hai
          </Text>
        </marquee>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em" colorScheme="blue">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;

//what is history with code

// In React, history and useHistory are commonly used in combination with React Router for navigation. They provide a way to interact with the browser's history and perform navigation programmatically. Here's an example of how to use useHistory:

// import React, { useState, useEffect } from 'react';

// function MyComponent() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     // This code runs after every render
//     document.title = `You clicked ${count} times`;
//   }, [count]); // Only re-run the effect if count changes

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }

// export default MyComponent;
