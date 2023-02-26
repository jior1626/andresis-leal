import React, { createContext, useState } from 'react';

export const AlertsContext = createContext(null);
export const AlertsDispatchContext = createContext(null);

export const AlertsProvider = ({ children }) => {
  const [alert, dispatch] = useState(null);

  return (
    <AlertsContext.Provider value={alert}>
      <AlertsDispatchContext.Provider value={dispatch}>
        {children}
      </AlertsDispatchContext.Provider>
    </AlertsContext.Provider>
  );
};
