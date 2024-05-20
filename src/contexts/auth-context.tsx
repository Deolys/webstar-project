import React, { createContext, useState, useEffect } from 'react';

interface contextUser {
  currentUser: {
    email: string;
  };
  setCurrentUser: React.Dispatch<React.SetStateAction<{ email: string }>>;
}
export const AuthContext = createContext<contextUser>({
  currentUser: null,
  setCurrentUser: () => null
});

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(window.localStorage.getItem('currentUser'));
    if (storedData) {
      setCurrentUser({ email: storedData });
    }
  }, []);

  useEffect(() => {
    if(!currentUser)
      window.localStorage.removeItem('currentUser');
    else
      window.localStorage.setItem('currentUser', JSON.stringify(currentUser.email));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;