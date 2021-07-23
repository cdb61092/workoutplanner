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
import React, { SyntheticEvent, useState } from "react";
import { login } from "../../api";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Redirect } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

// type LoginProps = {
//   setUser: React.Dispatch<React.SetStateAction<any>>;
// };

const Login = () => {
  const test = useAuth();
  console.log(test);
  const [redirect, setRedirect] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  // const handleSubmit = async (e: SyntheticEvent) => {
  //   e.preventDefault();

  //   const options: AxiosRequestConfig = {
  //     url: "http://localhost:5000/api/auth/login",
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     data: JSON.stringify({
  //       username: userInfo.username,
  //       password: userInfo.password,
  //     }),
  //     withCredentials: true,
  //   };

  //   axios(options)
  //     .then((res) => {
  //       setUser(res.data);
  //       setRedirect(true);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  if (redirect) {
    return <Redirect to="/home" />;
  }

  return (
    <Flex h="100vh" justify="center" align="center">
      <Box>
        <VStack>
          <form onSubmit={(e) => test?.login(e, userInfo)}>
            <Heading textAlign="center">Login</Heading>
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
              Login
            </Button>
          </form>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Login;
