// Store the client identifier and athlete name.
import { createContext, useContext, useEffect, useState } from "react";

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState({
    clientId: null,
    athleteName: null,
  });

  useEffect(() => {
    // Load session data from localStorage or any other storage mechanism
    const storedSession = JSON.parse(localStorage.getItem("session"));
    if (storedSession) {
      setSession(storedSession);
    }
  }, []);

  useEffect(() => {
    // Save session data to localStorage whenever it changes
    localStorage.setItem("session", JSON.stringify(session));
  }, [session]);

  return (
    <SessionContext.Provider value={{ session, setSession }}>
      {children}
    </SessionContext.Provider>
  );
}