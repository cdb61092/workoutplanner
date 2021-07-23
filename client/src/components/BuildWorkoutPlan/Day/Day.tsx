import { useState } from "react";
import { Box, Text, Button, HStack, Input } from "@chakra-ui/react";
import Exercise from "./Exercise/Exercise";
import {
  useFieldArray,
  UseFormRegister,
  useFormContext,
} from "react-hook-form";
import { FormValues } from "../BuildWorkoutPlan";

type Props = {
  day: string;
};

const Day = ({ day }: Props) => {
  // const [exercises, setExercises] = useState<Exercises[]>();
  // const { register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: "plan.day.exercises",
  });
  return (
    <Box>
      <Text>{day}</Text>
      <HStack spacing={5}>
        <Text>Add an exercise</Text>
        <Button
          onClick={() => append({ name: "", sets: 0, reps: 0, weight: 0 })}
        >
          Add +
        </Button>
      </HStack>
      {fields.map((field, index) => {
        return <Exercise key={field.id} index={index} remove={remove} />;
      })}
    </Box>
  );
};

export default Day;
