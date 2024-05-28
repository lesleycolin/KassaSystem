import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../FirebaseConfig";

export const AuthContext = createContext({
  isAuthenticated: false,
  login: async (email, password) => {},
  logout: async () => {},
  register: async (email, password, displayName) => {},
});

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuthenticated(!!user);
    });

    return unsubscribe;
  }, []);

  const login = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      throw error;
    }
  };

  const register = async (email, password, displayName) => {
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await userCredential.user.updateProfile({ displayName });
    } catch (error) {
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
