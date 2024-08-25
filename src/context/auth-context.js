import { useContext } from "react";
import { createContext } from "react";
import { authReducer } from "../reducer";
import { useReducer } from "react";

const initialValue = {
  isAuthModalOpen: false,
  isDropDownModalOpen:false,
  username: "",
  number: "",
  email: "",
  password: "",
  ConfirmPassword:"",
  accessToken:"",
  name:"",
  selectedTab:"login",
};
const AuthContext = createContext(initialValue);
const AuthProvider = ({ children }) => {
  const [{ isAuthModalOpen, username, email, password, number,selectedTab,ConfirmPassword,accessToken,name,isDropDownModalOpen }, authDispatch] =
    useReducer(authReducer, initialValue);
  return (
    <AuthContext.Provider
      value={{ isAuthModalOpen, username, email, password, number,selectedTab, authDispatch,ConfirmPassword ,accessToken,name,isDropDownModalOpen}}
    >
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
