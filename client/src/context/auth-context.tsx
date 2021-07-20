import React, { createContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";

const AuthContext = createContext<null | React.Context>(null);
AuthContext.displayName = "AuthContext";

type Props = {
  children: JSX.Element;
};

export const AuthProvider = ({ children }: Props) => {
  return <AuthContext.Provider></AuthContext.Provider>;
};
