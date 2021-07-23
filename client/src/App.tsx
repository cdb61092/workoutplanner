import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CSSReset, Flex } from "@chakra-ui/react";
import BuildWorkoutPlan from "./components/BuildWorkoutPlan/BuildWorkoutPlan";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import axios from "axios";
import { useAuth } from "./context/auth-context";

axios.defaults.withCredentials = true;

const queryClient = new QueryClient();

type User = {
  token: string;
  user: {
    id: string;
    username: string;
  };
};

function App() {
  const auth = useAuth();
  console.log(auth?.user);

  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <Flex h="100vh" justify="center">
          <CSSReset />
          <Switch>
            <Route exact path="/">
              {auth?.user ? <Home /> : <Login />}
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/createWorkout">
              <BuildWorkoutPlan></BuildWorkoutPlan>
            </Route>
            <Route exact path="/home"></Route>
          </Switch>

          <ReactQueryDevtools initialIsOpen />
        </Flex>
      </QueryClientProvider>
    </Router>
    // [
    //   {
    //     "name": "State",
    //     "value": {
    //       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZjRhZDhhNDRmM2Q2MjJiMDA0YzdkZiIsImlhdCI6MTYyNjY2MjE2NiwiZXhwIjoxNjI2NjY1NzY2fQ.zzOiJitOQIlL0umwMq4kmft6OaIA9xmCjvB3oJU2-UQ",
    //       "user": "{id: \"60f4ad8a44f3d622b004c7df\", username: \"test\"}"
    //     },
    //     "subHooks": [],
    //     "hookSource": {
    //       "lineNumber": 183,
    //       "functionName": "App",
    //       "fileName": "http://localhost:3000/static/js/main.chunk.js",
    //       "columnNumber": 81
    //     }
    //   }
    // ]
  );
}

export default App;
