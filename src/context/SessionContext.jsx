// Store the client identifier and athlete name in browser session storage to persist the session across page reloads.
//  The session will be cleared when the browser is closed. 
// Privacy mode is enabled by default, and can be toggled on or off by the user.

import { createContext, useContext, useEffect, useState } from "react";

const SessionContext = createContext(null);

export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(() => {
    try {
      const saved = sessionStorage.getItem("gymSession");
      return saved ? JSON.parse(saved) : null;
    } catch (error) {
      return null;
    }
  });

  const [privacyEnabled, setPrivacyEnabled] = useState(true);

  useEffect(() => {
    if(session) {
      sessionStorage.setItem("gymSession", JSON.stringify(session));
    } else {
      sessionStorage.removeItem("gymSession");
    }
  }, [session]);

  const login = (user) => {
    setSession({
      clientId: user.clientId,
      athleteName: user.athleteName,
    });
    setPrivacyEnabled(true);
  }

  const logout = () => {
    setSession(null);
    setPrivacyEnabled(true);
    sessionStorage.removeItem("gymSession");
  }

  return (
    <SessionContext.Provider value={{ session, login, logout, privacyEnabled, setPrivacyEnabled }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
};