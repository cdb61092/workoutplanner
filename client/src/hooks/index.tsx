import { useAuth } from "../context/auth-context";

export const useWorkouts = () => {
  const auth = useAuth();
  return auth?.user.workouts;
};
