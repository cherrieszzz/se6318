"use client";
import React, { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ childen }) => {

  const [loggedUser, setLoggedUser] = useState();

  const signup = (username, email, password, image) => {
    
  }

  const signin = (username, password) => {

  }

  const logout = () => {

  }

  return (
    <AuthContext.Provider value={{loggedUser, signin, signup, logout}}>{childen}</AuthContext.Provider>
  );
};

export default AuthProvider;
