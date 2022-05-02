import { createContext, ReactNode, useContext, useState } from "react";
import { NavigateFunction } from "react-router-dom";
import api from "../../Services/api";

interface AuthProviderProps {
  children: ReactNode;
}

interface UserData {
  email: string;
  password: string;
}
interface AuthProviderData {
  authToken: string;
  logOut: (navigate: NavigateFunction) => void;
  signIn: (data: UserData, navigate: NavigateFunction) => void;
  registerUser: (data: UserData, navigate: NavigateFunction) => void;
  loadLogin: boolean;
  setIsLoadLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authToken, setAuthToken] = useState(() => {
    return localStorage.getItem("@Split:Token") || "";
  });
  const [loadLogin, setIsLoadLogin] = useState(false);

  const signIn = (data: UserData, navigate: NavigateFunction) => {
    api
      .post("/login", data)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem(
          "@Split:Token",
          JSON.stringify(response.data.accessToken)
        );
        setAuthToken(response.data.token);
        navigate("/dashboard");
        setIsLoadLogin(false);
      })
      .catch((err) => setIsLoadLogin(false));
  };

  const logOut = (navigate: NavigateFunction) => {
    setAuthToken("");
    localStorage.clear();
    navigate("/");
  };

  const registerUser = (data: UserData, navigate: NavigateFunction) => {
    api
      .post("/register", data)
      .then((response) => {
        console.log(response.data);
        setAuthToken(response.data.token);
        navigate("/login");
        setIsLoadLogin(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <AuthContext.Provider
      value={{
        authToken,
        logOut,
        signIn,
        registerUser,
        loadLogin,
        setIsLoadLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
