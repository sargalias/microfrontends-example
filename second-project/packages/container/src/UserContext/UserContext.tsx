import React, { createContext, useState } from 'react';

export type UserContextType = {
  isSignedIn: boolean;
  setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

export const UserContext = createContext<UserContextType>(undefined!);

type UserProviderProps = {
  children: React.ReactNode;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <UserContext.Provider value={{ isSignedIn, setIsSignedIn }}>
      {children}
    </UserContext.Provider>
  );
};
