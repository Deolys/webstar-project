import React, { createContext, useState, useEffect } from 'react';

interface contextUser {
  currentUser: {
    email: string;
    cardId: string;
  };
  setCurrentUser: React.Dispatch<React.SetStateAction<{ email: string, cardId: string }>>;
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
      setCurrentUser({ email: storedData.email, cardId: storedData.cardId});
    }
  }, []);

  useEffect(() => {
    if(!currentUser) {
        window.localStorage.removeItem('currentUser');
    }
    else {
      window.localStorage.setItem('currentUser', JSON.stringify({email: currentUser.email, cardId: currentUser.cardId}));
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;