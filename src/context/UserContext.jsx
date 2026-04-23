//react
import { createContext, useState } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
    const [userIncome, setUserIncome] = useState(0);
    const [userEmail, setUserEmail] = useState("");
    const [userName, setUserName] = useState("");

  return (
      <UserContext.Provider value={{
        userIncome, setUserIncome,
        userName, setUserName,
        userEmail, setUserEmail }}>
            {children}
    </UserContext.Provider>
  );
}

export default UserProvider;