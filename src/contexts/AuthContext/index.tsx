import React, { createContext, useContext, useState } from "react";
import { AuthContextValue } from "./type";
import { AuthHelper } from "../../utils/AuthHelper";

const initialValue: AuthContextValue = {
  user: null,
  loginUser: () => {},
  logoutUser: () => {},
};

const AuthContext = createContext(initialValue);

export function useAuthContext() {
  return useContext(AuthContext);
}

export default function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [auth, setAuth] = useState<AuthContextValue>(initialValue);

  const loginUser = () => {
    // Todo
  };

  const logoutUser = () => {
    // Todo
    AuthHelper.clearSession();
  };

  const RefreshToken = () => {
    // Todo
  };

  return (
    <AuthContext.Provider value={{ ...auth, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
}
