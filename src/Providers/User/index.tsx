import jwtDecode from "jwt-decode";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import api from "../../Services/api";

interface UserProviderProps {
  children: ReactNode;
}

interface TokenData {
  email: string;
  iat: number;
  exp: number;
  sub: string;
}

interface UserData {
  name: string;
  age: number;
}

interface UserContextData {
  getUserData: () => void;
  user: UserData;
}

export const UserContext = createContext<UserContextData>(
  {} as UserContextData
);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<UserData>({} as UserData);

  const getUserData = useCallback(async () => {
    const token = localStorage.getItem("@Split:Token") || "";
    const tokenData: TokenData = jwtDecode(token);
    const response = await api.get(`/users/${Number(tokenData.sub)}`);

    setUser(response.data);
  }, []);

  return (
    <UserContext.Provider value={{ user, getUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
