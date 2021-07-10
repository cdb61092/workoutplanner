import { Box } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import InitialSteps from "./InitialSteps/InitialSteps";
import { useState } from "react";
import Day from "./Day/Day";

type Exercise = {
  name: string;
  sets: number;
  reps: number;
  weight: number;
};

export type FormValues = {
  name: string;
  description: string;
  activeDays: string[];
  plan: {
    day: {
      dayOfWeek: string;
      exercises: Exercise[];
    };
  };
};

const BuildWorkoutPlan = () => {
  const methods = useForm<FormValues>();
  const { getValues } = methods;

  const values = getValues();
  console.log(values);

  const [currentDay, setCurrentDay] = useState<null | string>("monday");

  // const adays = watch("activeDays");
  const days = ["monday"];

  return (
    <Box>
      <FormProvider {...methods}>
        <form>
          <InitialSteps />
          {days.map((day) => {
            return day === currentDay && <Day day={day} />;
          })}
        </form>
      </FormProvider>
    </Box>
  );
};

export default BuildWorkoutPlan;
