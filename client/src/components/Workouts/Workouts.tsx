import { fetchWorkouts } from "../../api";
import { SyntheticEvent, useEffect, useState } from "react";
import { useQuery } from "react-query";
import useWorkouts from "../../../shared/hooks/useWorkouts";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import DisplayWorkout from "./DisplayWorkout";

type WorkoutsProps = {
  workouts: [
    {
      name: string;
      days: [
        {
          day: number;
          exercises: [
            {
              name: string;
              rest: number;
              sets: number;
              reps: number;
            }
          ];
        }
      ];
    }
  ];
};

type WorkoutType = {
  name: string;
  days: [
    {
      day: number;
      exercises: [
        {
          name: string;
          rest: number;
          sets: number;
          reps: number;
          weight: number;
        }
      ];
    }
  ];
};
const Workout = ({ workout, onClick }: any) => {
  return (
    <Button isFullWidth onClick={() => onClick()}>
      {workout.name}
    </Button>
  );
};

const Workouts = ({ workouts }: WorkoutsProps) => {
  const [selectedWorkout, setSelectedWorkout] = useState<
    null | undefined | WorkoutType
  >(null);

  const handleClick = (workoutName: string) => {
    const chosenWorkout: any = workouts?.find((workout) => {
      return workout.name === workoutName;
    });
    setSelectedWorkout(chosenWorkout);
  };

  console.log("sel: ", selectedWorkout);
  return (
    <>
      <Box width="400px" textAlign="center">
        <Text>Saved workouts</Text>
        {workouts?.map((workout) => {
          return (
            <Workout
              workout={workout}
              onClick={() => handleClick(workout.name)}
            ></Workout>
          );
        })}
        {selectedWorkout ? <p>selected: {selectedWorkout?.name}</p> : null}
      </Box>
      <DisplayWorkout workout={selectedWorkout} />
    </>
  );
};

export default Workouts;
