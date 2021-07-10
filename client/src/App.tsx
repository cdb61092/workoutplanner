import { QueryClient, QueryClientProvider } from "react-query";
import React, { useState } from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import { fetchWorkouts } from "./api";
import "./App.css";
import {
  Box,
  Text,
  Textarea,
  Checkbox,
  CheckboxGroup,
  HStack,
  Input,
  Center,
  CSSReset,
  useCheckboxGroup,
  Flex,
  Button,
} from "@chakra-ui/react";
import BuildWorkoutPlan from "./components/BuildWorkoutPlan/BuildWorkoutPlan";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CSSReset />
      <Flex h="100vh" justify="center" align="center">
        <BuildWorkoutPlan></BuildWorkoutPlan>
      </Flex>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}

export default App;
