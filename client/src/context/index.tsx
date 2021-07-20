import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./auth-context";

type Props = {
  children: JSX.Element;
};

const AppProviders = ({ children }: Props) => {
  return (
    <Router>
      <AuthProvider>{children}</AuthProvider>
    </Router>
  );
};
