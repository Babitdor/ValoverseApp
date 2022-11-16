import React, {createContext, useState} from 'react';
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [RolesNAME, setRoles] = useState('Duelists');
  return (
    <AuthContext.Provider value={{RolesNAME,setRoles}}>
      {children}
    </AuthContext.Provider>
  );
};
