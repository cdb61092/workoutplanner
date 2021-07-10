import { fetchWorkouts } from "../../../api";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import useWorkouts from "../../../../shared/hooks/useWorkouts";

const Workout = () => {
  const [data, isLoading, isError, isFetching] = useWorkouts();
  console.log(data);

  return <div>{data && data[0].name}</div>;
};

export default Workout;
