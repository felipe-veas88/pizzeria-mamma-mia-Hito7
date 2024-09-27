import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true); // Initially logged in

  const logout = () => {
    setToken(false); // Set token to false on logout
  };

  const value = {
    token,
    logout,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
