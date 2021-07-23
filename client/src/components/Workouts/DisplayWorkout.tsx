import {
  Box,
  Text,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

type WorkoutProps = {
  workout:
    | {
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
      }
    | undefined
    | null;
};

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const getDayOfWeek = (num: number) => {
  return days[num];
};

const DisplayWorkout = ({ workout }: WorkoutProps) => {
  return (
    <Flex width="100%" justifyContent="space-around">
      {workout?.days.map((day) => {
        return (
          <Box>
            <Table variant="simple" width="300px">
              <TableCaption placement="top">
                {getDayOfWeek(day.day + 1)}
              </TableCaption>
              <Thead>
                <Tr>
                  <Th>Exercise</Th>
                  <Th>Sets</Th>
                  <Th>Reps</Th>
                  <Th>Weight</Th>
                  <Th>Rest</Th>
                </Tr>
              </Thead>
              <Tbody>
                {day.exercises.map((exercise) => {
                  return (
                    <Tr>
                      <Td>{exercise.name}</Td>
                      <Td>{exercise.sets}</Td>
                      <Td>{exercise.reps}</Td>
                      <Td>{exercise.weight}</Td>
                      <Td>{exercise.rest}</Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </Box>
        );
      })}
    </Flex>
  );
};

export default DisplayWorkout;
