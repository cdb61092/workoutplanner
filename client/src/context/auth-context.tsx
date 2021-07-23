import React, { useState, createContext, SyntheticEvent } from "react";
import axios, { AxiosRequestConfig } from "axios";
import { useContext } from "react";

const AuthContext = createContext<null | AuthContextType>(null);
AuthContext.displayName = "AuthContext";

type AuthContextType = {
  login: (e: SyntheticEvent, user: User) => void;
  register: (e: SyntheticEvent, user: User) => void;
  user?: any;
};

type User = {
  username: string;
  password: string;
};

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<null | object>(null);

  const login = (e: SyntheticEvent, user: User) => {
    e.preventDefault();
    const options: AxiosRequestConfig = {
      url: "http://localhost:5000/api/auth/login",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify({
        username: user.username,
        password: user.password,
      }),
    };

    axios(options)
      .then((res) => {
        setUser(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const register = async (e: SyntheticEvent, user: User) => {
    e.preventDefault();

    const options: AxiosRequestConfig = {
      url: "http://localhost:5000/api/auth/register",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify(user),
    };
    try {
      await axios(options);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
