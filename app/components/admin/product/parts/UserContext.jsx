import React, { createContext, useContext, useState } from "react";

// Create the context
const UserContext = createContext();

// Create the provider component
export const UserProvider = ({ children }) => {
  const [filter, setFilter] = useState("All");

  return (
    <UserContext.Provider value={{ filter, setFilter }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for consuming the context
export const useUserContext = () => useContext(UserContext);
