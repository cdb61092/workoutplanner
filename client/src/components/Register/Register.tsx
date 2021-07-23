import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Button,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { registerUser } from "../../api";

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Flex h="100vh" justify="center" align="center">
      <Box>
        <VStack>
          <form onSubmit={(e) => registerUser(e, userInfo)}>
            <Heading textAlign="center">Register</Heading>
            <FormControl>
              <FormLabel>User name</FormLabel>
              <Input
                value={userInfo.username}
                name="username"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                value={userInfo.password}
                name="password"
                onChange={handleChange}
              />
            </FormControl>
            <Button isFullWidth type="submit">
              Register
            </Button>
          </form>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Register;
