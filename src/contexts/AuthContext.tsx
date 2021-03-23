import { createContext, ReactNode, useCallback, useState } from "react";

import firebase from "../services/firebase";

interface AuthContextProps {
  isLogged: boolean;
  userData: {
    name: string;
    photo: string;
    email: string;
  };
  logout: () => void;
  loginGitHub: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLogged, setIsLogged] = useState(false);
  const [userData, setUserData] = useState(undefined);

  const logout = async () => {
    await firebase.auth().signOut();
    setIsLogged(false);
    setUserData(undefined);
  };

  const loginGitHub = async () => {
    const provider = new firebase.auth.GithubAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider);

    if (result) {
      setUserData({
        name: result.user.displayName,
        photo: result.user.photoURL,
        email: result.user.email,
      });

      setIsLogged(true);
    }
  };

  return (
    <AuthContext.Provider value={{ isLogged, userData, logout, loginGitHub }}>
      {children}
    </AuthContext.Provider>
  );
}
