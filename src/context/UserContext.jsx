//react
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
  //theuser stares
  const [userIncome, setUserIncome] = useState(0);
  const [userEmail, setUserEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("User");


  //after load rhe session from local storage on app start
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("user-session"));
    if (saved) {
      setUserName(saved.userName || "User");
      setUserEmail(saved.userEmail || "");
      setUserIncome(saved.userIncome || 0);
      setIsLoggedIn(true);
    }
  }, []);
  
  //then save the usar sessiong if they make any updates to anything (will probably add more values)
  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem(
        "user-session",
        JSON.stringify({
          userName,
          userEmail,
          userIncome,
        })
      );
    }
  }, [userName, userEmail, userIncome, isLoggedIn]);

  //logout function
  function logout() {
    localStorage.removeItem("user-session");
    setIsLoggedIn(false);
    setUserName("");
    setUserEmail("");
    setUserIncome(0);
  }

  return (
      <UserContext.Provider value={{
        userIncome, setUserIncome,
        userName, setUserName,
        userEmail, setUserEmail,
        isLoggedIn, setIsLoggedIn,
        logout}}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;