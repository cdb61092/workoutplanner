import {
  Input,
  HStack,
  FormControl,
  FormLabel,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { IconContext } from "react-icons";
import { MdRemoveCircle } from "react-icons/md";
import { useForm, useFormContext } from "react-hook-form";

type Props = {
  index: number;
  remove: (index?: number | number[] | undefined) => void;
};

const Exercise = ({ index, remove }: Props) => {
  const { register } = useFormContext();
  return (
    <HStack>
      <FormControl>
        <FormLabel>Exercise name</FormLabel>
        <Input {...register(`plan.day.exercises.${index}.name`)} />
      </FormControl>

      <FormControl>
        <FormLabel>Sets</FormLabel>
        <Input {...register(`plan.day.exercises.${index}.sets`)} />
      </FormControl>

      <FormControl>
        <FormLabel>Reps</FormLabel>
        <Input {...register(`plan.day.exercises.${index}.reps`)} />
      </FormControl>

      <FormControl>
        <FormLabel>Weight</FormLabel>
        <Input {...register(`plan.day.exercises.${index}.weight`)} />
      </FormControl>

      <IconButton
        icon={<MdRemoveCircle />}
        aria-label="Remove exercise"
        color="red"
        alignSelf="flex-end"
        fontSize="30px"
        variant="unstyled"
        onClick={() => remove(index)}
      ></IconButton>
    </HStack>
  );
};

export default Exercise;
