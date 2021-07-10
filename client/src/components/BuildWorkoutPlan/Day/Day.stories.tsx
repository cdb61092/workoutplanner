import Day from "./Day";
import { UseFormRegister } from "react-hook-form";
import { Meta, Story } from "@storybook/react";
import { FormValues } from "../BuildWorkoutPlan";

type Props = {
  day: string;
  currentDay: null | string;
  register: UseFormRegister<FormValues>;
};

export default {
  title: "Day",
  component: Day,
} as Meta;

const Template: Story<Props> = (args) => <Day {...args} />;

export const Default = Template.bind({});

Default.args = {
  day: "",
};
