import { fetchWorkouts, createWorkout } from "../../src/api";

import { useQuery } from "react-query";

const useWorkouts = () => {
  const { data, isLoading, isFetching, isError } = useQuery(
    "fetchWorkouts",
    fetchWorkouts
  );

  return [data?.data, isLoading, isFetching, isError, createWorkout];
};

export default useWorkouts;
