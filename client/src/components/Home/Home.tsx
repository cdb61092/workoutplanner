import { Heading, Button, Text, Flex, Box, VStack } from "@chakra-ui/react";
import { createWorkout } from "../../api/";
import { useAuth } from "../../context/auth-context";
import Workouts from "../Workouts/Workouts";
import { useState, useEffect, SyntheticEvent } from "react";

const Home = () => {
  const auth = useAuth();
  return (
    <Box width="100%">
      <VStack marginTop="20">
        <Heading>Welcome, {auth?.user.username}</Heading>
        <Text fontSize="xl">Select a workout, or create a new one</Text>

        <Workouts workouts={auth?.user.workouts} />
      </VStack>
    </Box>
  );
};

export default Home;
