import { useState, ReactText } from "react";
import { FormValues } from "../BuildWorkoutPlan";
import {
  Box,
  Text,
  Input,
  Checkbox,
  CheckboxGroup,
  Flex,
  Button,
  HStack,
  FormLabel,
  FormControl,
  FormErrorMessage,
  NumberInputStepper,
} from "@chakra-ui/react";
import { useForm, useFormContext } from "react-hook-form";
import React from "react";

const days = [
  ["Sunday", 1],
  ["Monday", 2],
  ["Tuesday", 3],
  ["Wednesday", 4],
  ["Thursday", 5],
  ["Friday", 6],
  ["Saturday", 7],
];

const InitialSteps = () => {
  const [initialStepsDone, setInitialStepsDone] = useState(false);
  const { register } = useFormContext();
  // const handleChange = (value: ReactText[]) => {
  //   let newDays: string[];
  //   console.log(value);
  // };

  if (initialStepsDone) return null;

  return (
    <Box w="700px">
      <FormControl>
        <FormLabel htmlFor="name">Workout name</FormLabel>
        <Input
          id="name"
          placeholder="name"
          {...register("name", {
            required: "This is required",
          })}
        ></Input>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="description">Workout description</FormLabel>
        <Input
          id="description"
          placeholder="description"
          {...register("description", {
            required: "This is required",
          })}
        ></Input>
      </FormControl>

      <FormControl>
        <FormLabel>Which days do you want to work out?</FormLabel>
        <Flex w="100%" justify="space-between">
          <CheckboxGroup>
            {days.map(([day, dayNum]) => {
              return (
                <Checkbox value={day} key={dayNum} {...register("activeDays")}>
                  {day}
                </Checkbox>
              );
            })}
          </CheckboxGroup>
        </Flex>
      </FormControl>

      <HStack></HStack>
      <Button isFullWidth mt={10} onClick={() => setInitialStepsDone(true)}>
        Continue
      </Button>
    </Box>
  );
};

export default InitialSteps;
