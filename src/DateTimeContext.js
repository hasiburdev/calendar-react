import React, { useContext } from "react";

export const DateTimeContext = React.createContext();

export const DateTimeProvider = ({ children }) => {
  const [dateTime, setDateTime] = React.useState(null);
  const value = { dateTime, setDateTime };
  return (
    <DateTimeContext.Provider value={value}>
      {children}
    </DateTimeContext.Provider>
  );
};

export function useDateTime() {
  return useContext(DateTimeContext);
}
